let sessionService = function (Properties, $rootScope, $localStorage, $http, uuid, Token) {
  "ngInject";
  let _storage = $localStorage;
  const endpoint = Properties.endpoint + '/tokens';

  let isLogged = () => {
    return !Token.isExpired();
  }

  let isExpired = () => {
    let expired = false;
    if ( !!_storage.session ) {
      expired = _storage.session.expired;
      delete _storage.session.expired;
    }
    return expired;
  }

  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/create-a-new-token
  let login = (user, pass) => {
    _storage.session = {
      username: user,
      password: pass,
      clientId: uuid.v4().substring(0, 20)
    };

    let promise = $http.post(endpoint, _storage.session);

    promise.then( response => {
      delete _storage.session.password;
      Token.create(response.data.authenticationToken);
    })
    .catch( response => {
      delete _storage.session.clientId;
    });

    return promise;
  };

  let get = () => {
    return _storage.session;
  }

  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/refresh-token
  let renew = () => {
    return $http.put(endpoint);
  }

  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/remove-token
  let logout = () => {
    let promise = $http.delete(endpoint);

    promise.finally( () => {
      Token.destroy();
      $rootScope.$broadcast('SESSION.LOGOUT');
    });

    return  promise;
  };

  return {
    isLogged, isExpired, get,
    // PROMISES
    login, renew, logout
  };
};

export default sessionService;
