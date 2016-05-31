let sessionService = function (Properties, Token, $http, uuid) {
  "ngInject";
  const endpoint = Properties.endpoint + '/tokens';

  let isLogged = () => {
    return !Token.isExpired();
  }

  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/create-a-new-token
  let login = (user, pass) => {
    localStorage.setItem('gemini.session.user', user);
    let session = {
      username: user,
      password: pass,
      clientId: uuid.v4().substring(0, 20)
    };

    let promise = $http.post(endpoint, session);

    promise.then(response => {
      Token.create(response.data.authenticationToken);
    });

    return promise;
  };

  let get = () => {
    return {
      username: localStorage.getItem('gemini.session.user'),
      token: Token.get()
    };
  }

  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/refresh-token
  let renew = () => {
    return $http.put(endpoint);
  }

  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/remove-token
  let logout = () => {
    let promise = $http.delete(endpoint);

    promise.finally(() => {
      Token.destroy();
    });

    return promise;
  };

  return {
    isLogged, get, //isExpired,
    // PROMISES
    login, renew, logout
  };
};

export default sessionService;
