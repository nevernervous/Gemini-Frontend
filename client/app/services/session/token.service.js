let tokenService = function ($rootScope, $window, $localStorage, $interval, $timeout, Configuration) {
  "ngInject";
  let _timer;
  let _interval;
  let _keepalive;
  let _storage = $localStorage;
  let session_timeout = (Configuration.get('session.timeout') || 45) * 60 /* seconds */ * 1000 /* milliseconds */;
  let session_warning = (Configuration.get('session.warning') || 15) * 60 /* seconds */ * 1000 /* milliseconds */;

  let exists = () => {
    return (!!_storage.session && !!_storage.session.authenticationToken && localStorage.getItem('gemini.keepalive'));
  }

  let remainingTime = () => {
    let now = new Date().getTime();
    let updateAt = _storage.session.updateAt || 0;
    let timeout = session_timeout;
    let remaining = updateAt + timeout - now;
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
    if ( !_interval ) {
      _interval = $interval( () => {
        let pending = remainingTime();
        if ( pending < session_warning ) {
          stopExpiring();
          $rootScope.$broadcast('SESSION.EXPIRING');
        }
      }, 1000); // EACH 1 SECOND
    }
  }

  let stopExpired = () => {
    if ( _timer ) {
      $interval.cancel(_timer);
      _timer = null;
    }
  }
  let startExpired = () => {
    if ( !_timer ) {
      _timer = $interval( () => {
        let pending = remainingTime();
        if ( pending === 0 ) {
          stopExpired();
          if ( exists() ) {
            _storage.session.expired = true;
          }
          $rootScope.$broadcast('SESSION.EXPIRED');
        }
      }, 1000); // EACH 1 SECOND
    }
  }

  let stopKeepAlive = () => {
    if ( _keepalive ) {
      $timeout.cancel(_keepalive);
      _keepalive = null;
    }
  }
  let startKeepAlive = () => {
    if ( !_keepalive ) {
      _keepalive = $timeout( () => {
        localStorage.setItem('gemini.keepalive', true);
        _keepalive = null;
        startKeepAlive();
      }, 5000); // EACH 5 SECOND
    }
  }

  let stop = () => {
    stopExpired();
    stopExpiring();
    stopKeepAlive();
  }
  let start = () => {
    startExpired();
    startExpiring();
    startKeepAlive();
  }

  let update = () => {
    if ( exists() ) {
      _storage.session.updateAt = new Date().getTime();
	    start();
    }
  }

  let create = (token) => {
    localStorage.setItem('gemini.keepalive', true);
    _storage.session.authenticationToken = token;
    update();
  }

  let destroy = () => {
    stop();
    if ( exists() ) {
      delete _storage.session.authenticationToken;
      delete _storage.session.updateAt;
    }
  };

  let initialize = () => {
    if ( !isExpired() ) {
      start();
    }

    $window.onbeforeunload = () => {
      stop();
      localStorage.removeItem('gemini.keepalive');
    };
  }
  initialize();

  return { isExpired, isExpiring, remainingTime, get, create, destroy, update };
};

export default tokenService;
