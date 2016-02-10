let tokenService = function ($rootScope, $localStorage, $timeout) {
  "ngInject";
  let _timer;
  let _interval;
  let _storage = $localStorage;
  
  let exists = () => {
    return (!!_storage.session && !!_storage.session.authenticationToken);
  }

  let destroy = () => {
    if ( _interval ) { 
      $interval.cancel(_interval);
    }
    if ( _timer ) { 
      $timeout.cancel(_timer);
    }
    if ( exists() ) { 
      delete _storage.session.authenticationToken;
    }
  };
  
  let get = () => {
    if ( exists() ) { 
      return { 
        authenticationToken: _storage.session.authenticationToken, 
        updateAt: _storage.session.updateAt 
      };
    } 
    return null;
  }
  
  let update = () => {
    _storage.session.updateAt = new Date().getTime();
    if ( _timer ) { 
      $timeout.cancel(_timer);
    }
    _timer = $timeout(() => { 
      $rootScope.broadcast('SESSION.EXPIRED');
    }, 2700000); // 45 MINUTES AFTER
  }  
  
  let watch = () => { 
    if ( !_interval ) {
      _interval = $timeout( () => {
        let pending = new Date().getTime() - (_storage.session.updateAt || 0);
        if ( pending < 900000 ) { // IF LESS THAN 15 MINUTES
          $rootScope.broadcast('SESSION.EXPIRING');
        } else { 
          watch();
        }
      }, 60000); // EACH 1 MINUTE
    }
  }
  
  let create = (token) => { 
    _storage.session.authenticationToken = token; 
    update();
    watch();
  }

  return { exists, get, create, destroy, update, watch };
};

export default tokenService;
