let tokenService = function ($rootScope, $window, $timeout, Configuration) {
  "ngInject";
  let _timer;
  let login = false;
  let expiring = false;
  let expired = false;
  let session_timeout = (Configuration.get('session.timeout') || 45) * 60 /* seconds */ * 1000 /* milliseconds */;
  let session_warning = (Configuration.get('session.warning') || 15) * 60 /* seconds */ * 1000 /* milliseconds */;

  let start = () => {
    if ( !_timer ) {
      _timer = $timeout( () => {

        // console.log('---------------------------------')
        // console.log('login: ' + login);
        // console.log('isExpired: ' + isExpired());
        // console.log('expiring: ' + expiring);
        // console.log('remainingTime: ' + remainingTime());
        // console.log('session_timeout: ' + session_timeout);
        // console.log('session_warning: ' + session_warning);
        // console.log('gemini.token.id: ' + localStorage.getItem('gemini.token.id'));
        // console.log('gemini.token.keepalive: ' + localStorage.getItem('gemini.token.keepalive'));
        // console.log('gemini.token.updateAt: ' + localStorage.getItem('gemini.token.updateAt'));
        let is_expired = isExpired();
        let remaining = remainingTime();

        if ( !is_expired && !login ) {
          login = true;
          expired = false;
          $rootScope.$broadcast('SESSION.LOGIN');
        } else if ( !is_expired && login && remaining < session_warning && !expiring ) {
          expiring = true;
          expired = false;
          $rootScope.$broadcast('SESSION.EXPIRING');
        } else if ( !is_expired && login && remaining > session_warning && expiring ) {
          expiring = false;
          expired = false;
          $rootScope.$broadcast('SESSION.RENEW');
        } else if ( is_expired && expiring && !(remaining > 0) ) {
          login = false;
          expiring = false;
          expired = true;
          localStorage.removeItem('gemini.token.id');
          localStorage.removeItem('gemini.token.keepalive');
          //localStorage.removeItem('gemini.token.updateAt');
          $rootScope.$broadcast('SESSION.EXPIRED');
        } else if ( is_expired && login ) {
          login = false;
          expiring = false;
          expired = false;
          $rootScope.$broadcast('SESSION.LOGOUT');
        }

        if ( !is_expired ) {
          localStorage.setItem('gemini.token.keepalive', new Date().getTime());
        }

        _timer = null;
        start();
      }, 1000); // EACH 1 SECOND
    }
  }

  let stop = () => {
    _timer = null;
    $timeout.cancel(_timer);
  }

  let isExpired = () => {
    //console.log("isExpired");
    if (!!localStorage.getItem('gemini.token.id') && !!localStorage.getItem('gemini.token.keepalive') && !!localStorage.getItem('gemini.token.updateAt') ) {
      let alive = remainingTime() > 0;
      let now = new Date().getTime();
      let keepalive = (now - localStorage.getItem('gemini.token.keepalive')) < 240000 ; // 4 min
      // console.log("isExpired.alive: " + alive);
      // console.log("isExpired.keepalive: " + keepalive);
      // console.log("isExpired: " + !(alive && keepalive));
      return !(alive && keepalive);
    }
    //console.log("isExpired: true");
    return true;
  }

  let remainingTime = () => {
    let now = new Date().getTime();
    let updateAt = !!localStorage.getItem('gemini.token.updateAt') ? parseInt(localStorage.getItem('gemini.token.updateAt')) : 0;
    let timeout = session_timeout;
    let remaining = updateAt + timeout - now;
    return  remaining > 0 ? remaining : 0;
  }

  let get = () => localStorage.getItem('gemini.token.id');
  let wasExpired = () => expired;

  let update = () => {
    if ( !isExpired() ) {
      localStorage.setItem('gemini.token.updateAt', new Date().getTime());
    }
  }

  let create = (token) => {
    let now = new Date().getTime();
    login = true;
    expiring = false;
    expired = false;
    localStorage.setItem('gemini.token.id', token);
    localStorage.setItem('gemini.token.keepalive', now);
    localStorage.setItem('gemini.token.updateAt', now);
    $rootScope.$broadcast('SESSION.LOGIN');
  }

  let destroy = () => {
    login = false;
    expiring = false;
    expired = false;
    localStorage.removeItem('gemini.token.id');
    localStorage.removeItem('gemini.token.keepalive');
    //localStorage.removeItem('gemini.token.updateAt');
    $rootScope.$broadcast('SESSION.LOGOUT');
  };

  let initialize = () => {
    start();
    $window.onbeforeunload = () => {
      stop();
    };
  }
  initialize();

  return {
    isExpired, wasExpired, remainingTime, get,
    create, destroy, update };
};

export default tokenService;
