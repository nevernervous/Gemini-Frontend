let appInterceptor = function ($q, $injector, Properties) {
  "ngInject";
  
  let responseError = (response) => {
    if (response.status === 404 && response.config.url.startsWith(Properties.endpoint)) {
      console.warn("You are usgin fallback server for: " + response.config.url);
      var $http = $injector.get('$http');
      response.config.url = response.config.url.replace(Properties.endpoint, Properties.fallback.endpoint)
      return $http(response.config);
    }
    
    return $q.reject(response);
  }
  
  return { responseError };
};

export default appInterceptor;


