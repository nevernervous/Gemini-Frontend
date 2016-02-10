let sessionService = function ($rootScope, $localStorage, $http, Token) {
  "ngInject";
  let _timer;
  let _storage = $localStorage;
  const endpoint = 'http://gemini.ual.com:8080/api/tokens';
  
  let isLogged = () => {
    return (!!_storage.session && !!_storage.session.authenticationToken);
  }

  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/create-a-new-token
  let login = (user, pass) => {
    _storage.session = {
      username: user,
      password: pass,
      clientId: "sjkbLIABFDAISBFAJDKFNAasd"
    };
    
    let promise = $http.post(endpoint, _storage.session);
    
    promise.then( response => {
      delete _storage.session.password;
      Token.create(response.authenticationToken);
    })
    .catch( response => {
      delete _storage.session;
    });
    
    return promise;
  };
  
  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/refresh-token
  let renew = () => {
    let promise = $http.put(endpoint);
    promise.then( response => {
      Token.watch();
    });
    
    return promise;  
  }
  
  // DOC: http://docs.ualgemini.apiary.io/#reference/0/tokens/remove-token
  let logout = () => {
    Token.destroy();
    return $http.delete(endpoint);     
  };

  return { 
    isLogged, 
    // PROMISES
    login, renew, logout 
  };
};

export default sessionService;
