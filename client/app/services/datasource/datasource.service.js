let datasourceService = function (Properties, $http) {
  "ngInject";
  const endpoint = Properties.endpoint + '/datasources';
  
  let all = () => {
    return $http.get(endpoint);  
  }
  
  return {
    all
  };
};

export default datasourceService;
