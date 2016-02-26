let datasourceService = function (Properties, $http) {
  "ngInject";
  const endpoint = Properties.endpoint + '/DataSource';
  
  let all = () => {
    return $http.get(endpoint, {
      cache: true
    });  
  }
  
  let groups = (datasources) => {
    return $http.get(`${endpoint}/${datasources}/ColumnGroups`, {
      cache: true
    });  
  }
  
  let variables = (datasources, group) => {
    return $http.get(`${endpoint}/${datasources}/ColumnGroups/${group}`, {
      cache: true
    });  
  }  
  
  return {
    all, groups, variables
  };
};

export default datasourceService;
