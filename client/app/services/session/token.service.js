let tokenService = function ($rootScope, $localStorage, $timeout, $interval, Configuration) {
  "ngInject";
  let _timer;
  let _interval;
  let _storage = $localStorage;
  let session_timeout = Configuration.get('session.timeout') * 60 /* seconds */ * 1000 /* milliseconds */;
  let session_warning = Configuration.get('session.warning') * 60 /* seconds */ * 1000 /* milliseconds */; 
  
  let exists = () => {
    return (!!_storage.session && !!_storage.session.authenticationToken);
  }
  
  let remainingTime = () => {
    let now = new Date().getTime();    
    let remaining = ((_storage.session.updateAt || 0) + session_timeout) - now; 
    return  remaining > 0 ? remaining : 0;
  }
  
  let isExpiring = () => {
    if ( exists() ) {
      return remainingTime() < session_warning;
    }
    return true;
  }
  
  let isExpired = () => {
    return !( exists() && (remainingTime() > 0) ); 
  }  
  
  let get = () => {
    if ( exists() ) { 
      return _storage.session.authenticationToken;
    } 
    return null;
  } 
  
  let stopExpiring = () => {
    if ( _interval ) { 
      $interval.cancel(_interval);
      _interval = null;
    }
  }
  let startExpiring = () => { 
    if ( !_interval && session_timeout ) {
      _interval = $interval( () => {
        let pending = remainingTime();
        if ( pending < session_warning ) { 
          stopExpiring();
          $rootScope.$broadcast('SESSION.EXPIRING');
        } 
      }, 60000); // EACH 1 MINUTE
    }
  }
  
  let stopExpired = () => { 
    if ( _timer ) { 
      $timeout.cancel(_timer);
      _timer = null;
    }
  }
  let startExpired = () => {
    if ( _timer ) { 
      $timeout.cancel(_timer);
    }
    _timer = $timeout(() => { 
      $rootScope.$broadcast('SESSION.EXPIRED');
    }, remainingTime());        
  }      

  let stop = () => { 
    stopExpired();
    stopExpiring();
  }  
  let start = () => { 
    startExpired();
    startExpiring();
  }
        
  let update = () => {
    if ( exists() ) { 
      _storage.session.updateAt = new Date().getTime();
	    start(); 
    }
  }   
  
  let create = (token) => { 
    _storage.session.authenticationToken = token; 
    update();
  }
  
  let destroy = () => {
    if ( exists() ) { 
      delete _storage.session.authenticationToken;
      delete _storage.session.updateAt;
    }    
    stop();
  };  
  
  let initialize = () => {
    if ( !isExpired() ) {
      start();
    }
  }
  initialize();

  return { isExpired, isExpiring, remainingTime, get, create, destroy, update };
};

export default tokenService;
