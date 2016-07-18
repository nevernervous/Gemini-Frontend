let reportService = function (Properties, $http, ReportTransform, ServicesTransform, $q) {
  "ngInject";
  const endpoint = Properties.endpoint + '/ExecuteReports';


  let run = (reportData) => {
    let requestTransform = [ReportTransform.get("reportToJSON")];
    let responseTransform = [ReportTransform.get('reportExecute')];
    let canceller = $q.defer();

    let cancel = function () {
      canceller.resolve();
    };

    let promise = $http.post(`${endpoint}`, reportData, {
      timeout: canceller.promise,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      transformRequest: ServicesTransform.generate(requestTransform),
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
