let reportService = function(Properties, ServicesTransform, $http, $q, ReportObject) {
  "ngInject";
  const endpoint = Properties.endpoint + '/Reports';

  let create = () => {
      ReportObject.create();
      return ReportObject;
  };

  let currentReport = () => {
      return ReportObject;
  };

  let all = () => {
    let transformation = [ServicesTransform.get('simple')];
    return $http.get(endpoint, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let getById = (reportId) => {
    let transformation = [ServicesTransform.get('none')];
    return $http.get(`${endpoint}/${reportId}`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  };

  return {
      all,
      create,
      getById
  };
};

export default reportService;
