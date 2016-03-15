let tokenService = function ($rootScope, $window, $interval, $timeout, Configuration) {
  "ngInject";
  let _timer;
  let _interval;
  let _keepalive;
  let _token;
  let session_timeout = (Configuration.get('session.timeout') || 45) * 60 /* seconds */ * 1000 /* milliseconds */;
  let session_warning = (Configuration.get('session.warning') || 15) * 60 /* seconds */ * 1000 /* milliseconds */;

  let exists = () => {
    // RELOAD DETECTION
    if ( !localStorage.getItem('gemini.token.keepalive') && sessionStorage.getItem("gemini.reloaded")) {
      localStorage.setItem('gemini.token.keepalive', true);
    }

    return (!!localStorage.getItem('gemini.token.id') && localStorage.getItem('gemini.token.keepalive'));
  }

  let remainingTime = () => {
    let now = new Date().getTime();
    let updateAt = localStorage.getItem('gemini.token.updateAt') || 0;
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

  let get = () => localStorage.getItem('gemini.token.id');

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
            sessionStorage.setItem("gemini.expired", true);
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
        localStorage.setItem('gemini.token.keepalive', true);
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
      localStorage.setItem('gemini.token.updateAt', new Date().getTime());
	    start();
    }
  }

  let create = (token) => {
    localStorage.setItem('gemini.token.keepalive', true);
    localStorage.setItem('gemini.token.id', token);
    update();
  }

  let destroy = () => {
    stop();
    if ( exists() ) {
      localStorage.removeItem('gemini.token.id');
      localStorage.removeItem('gemini.token.updateAt');
    }
  };

  let initialize = () => {
    if ( !isExpired() ) {
      start();
    }

    $window.onbeforeunload = () => {
      stop();
      sessionStorage.setItem("gemini.reloaded", true);
      localStorage.removeItem('gemini.token.keepalive');
    };
  }
  initialize();

  return { isExpired, isExpiring, remainingTime, get, create, destroy, update };
};

export default tokenService;
