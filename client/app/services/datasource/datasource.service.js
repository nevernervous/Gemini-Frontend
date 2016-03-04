let datasourceService = function (Properties, ServicesTransform, $http) {
  "ngInject";
  const endpoint = Properties.endpoint + '/DataSources';
  const strategies = {
    simple: [ServicesTransform.get('simple')],
    group: [ServicesTransform.get('simple'), ServicesTransform.get('group')]
  }

  let all = (strategy = 'simple') => {
    let transformation = strategies[strategy];
    return $http.get(endpoint, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let groups = (datasource, strategy = 'simple') => {
    let transformation = strategies[strategy];
    return $http.get(`${endpoint}/${datasource.id}/ColumnGroups`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let variables = (datasource, group, strategy = 'simple') => {
    let transformation = strategies[strategy];
    return $http.get(`${endpoint}/${datasource.id}/ColumnGroups/${group.groupId}/Columns`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  return {
    all, groups, variables
  };
};

export default datasourceService;
