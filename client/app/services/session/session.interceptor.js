let sessionInterceptor = function (Token) {
  "ngInject";
  let _token = Token;
  
  let request = (config) => {
    if (_token.exists()) {
      config.headers['Authentication'] = _token.get().authenticationToken;
    }
    return config;
  }
  
  let response = (response) => {
    if (_token.exists()) {
      _token.update();
    }
    return response;
  }  

  return { request, response };
};

export default sessionInterceptor;
