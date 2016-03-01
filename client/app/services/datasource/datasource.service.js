let datasourceService = function (Properties, $http) {
  "ngInject";
  const endpoint = Properties.endpoint + '/DataSource';
  
  let all = () => {
    return $http.get(endpoint, {
      cache: Properties.cache
    });  
  }
  
  let groups = (datasource) => {
    return $http.get(`${endpoint}/${datasource.id}/ColumnGroups`, {
      cache: Properties.cache
    });  
  }
  
  let variables = (datasource, group) => {
    return $http.get(`${endpoint}/${datasource.id}/ColumnGroups/${group.groupId}/Columns`, {
      cache: Properties.cache
    });  
  }  
  
  return {
    all, groups, variables
  };
};

export default datasourceService;
