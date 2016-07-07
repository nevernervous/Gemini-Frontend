let sessionInterceptor = function (Token, $rootScope, $q) {
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

  let responseError = (response) => {
    if (response.status === 401) {
      _token.destroy();
    }
    return $q.reject(response);
  }

  return { request, response, responseError };
};

export default sessionInterceptor;
