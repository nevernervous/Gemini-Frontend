let sessionInterceptor = function (Token, $rootScope) {
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

  let reponseError = (response) => {
    if (response.status === 401) {
      _token.destroy();
    }
  }

  return { request, response, reponseError };
};

export default sessionInterceptor;
