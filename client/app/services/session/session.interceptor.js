let sessionInterceptor = function (Token) {
  "ngInject";
  let _token = Token;
  
  let request = (config) => {
    if (!_token.isExpired()) {
      config.headers['Authorization'] = _token.get();
    }
    return config;
  }
  
  let response = (response) => {
    _token.update();
    return response;
  }  

  return { request, response };
};

export default sessionInterceptor;
