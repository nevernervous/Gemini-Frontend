let sessionService = function ($timeout, $q) {
  "ngInject";
  let _session = false;
  
  let isLogged = () => {
    return _session;
  }
  
  let login = (user, pass) => {
    let deferred = $q.defer();
    $timeout(2000)
    .then(() => {
      
      if ((user === 'admin') && (pass === '1234')) { 
        deferred.resolve();
      } else {
        deferred.reject();
      }
    });
    
    return deferred.promise;
  };

  let logout = () => {
    return $timeout(2000);
  };

  return { isLogged, login, logout };
};

export default sessionService;
