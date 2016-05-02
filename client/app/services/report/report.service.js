let reportService = function (Properties, ServicesTransform, $http, $q, ReportObject, ReportTransform) {
  "ngInject";
  const endpoint = Properties.endpoint + '/Reports';

  let create = () => {
    ReportObject.clean();
    return ReportObject;
  };

  let currentReport = () => {
    return ReportObject;
  };

  let all = () => {
    let transformation = [ServicesTransform.get('simple')];

    return $http.get(endpoint, {
      cache: Properties.cache
      , transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let getById = (reportId) => {
    let transformation = [ReportTransform.get('simple')];
    return $http.get(`${endpoint}/${reportId}`, {
      cache: Properties.cache
      , transformResponse: ReportTransform.generate(transformation)
    }).then(
      response => {
        ReportObject.clean();
        ReportObject.load(response.data);
        return ReportObject;
      });
  };
  return {
    all
    , create
    , currentReport
    , getById
  };
};

export default reportService;
