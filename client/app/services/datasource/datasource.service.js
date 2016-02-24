let datasourceService = function (Properties, $http) {
  "ngInject";
  const endpoint = Properties.endpoint + '/datasources';
  
  let all = () => {
    return $http.get(endpoint, {
      cache: true
    });  
  }
  
  return {
    all
  };
};

export default datasourceService;
