let reportService = function(Properties, ServicesTransform, $http, $q) {
  "ngInject";
  const endpoint = Properties.endpoint + '/Reports';

  let all = () => {
    let transformation = [ServicesTransform.get('simple')];
    return $http.get(endpoint, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let getById = (reportId) => {
    let transformation = [ServicesTransform.get('simple')];
    return $http.get(`${endpoint}/${reportId}`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  };

  return {
    all,
    getById
  };
};

export default reportService;