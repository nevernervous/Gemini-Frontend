let reportService = function (Properties, $http, ReportTransform, ServicesTransform, $q) {
  "ngInject";
  const endpoint = Properties.endpoint + '/ExecuteReports';


  let run = (reportData) => {
    let requestTransform = [ReportTransform.get("run")];
    let responseTransform = [ServicesTransform.get('noop')];
    let canceller = $q.defer();

    let cancel = function () {
      canceller.resolve();
    };

    let promise = $http.post(`${endpoint}`, reportData, {
      timeout: canceller.promise,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      transformRequest: ReportTransform.generate(requestTransform),
      transformResponse: ServicesTransform.generate(responseTransform)
    });

    return {
      promise,
      cancel
    };
  }

  return {
    run
  };
};

export default reportService;
