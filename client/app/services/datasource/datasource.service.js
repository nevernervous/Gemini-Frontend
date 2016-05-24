let datasourceService = function (Properties, ServicesTransform, $http, $q) {
  "ngInject";
  const endpoint = Properties.endpoint + '/DataSources';

  let all = () => {
    let transformation = [ServicesTransform.get('simple'), ServicesTransform.get('group')];
    return $http.get(endpoint, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let groups = (datasource) => {
    let transformation = [ServicesTransform.get('simple')];
    return $http.get(`${endpoint}/${datasource.id}/ColumnGroups`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let variables = (datasource) => {
    let transformation = [ServicesTransform.get('simple')];
    return $http.get(`${endpoint}/${datasource.id}/Columns`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    }).then(response => {
      let variables = {
        data: {
          items: response.data
        }
      }
      return variables;
    });

  }

  return {
    all, groups, variables
  };
};

export default datasourceService;
