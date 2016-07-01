let reportService = function (Properties, $http, ReportTransform, ServicesTransform) {
  "ngInject";
  const endpoint = Properties.endpoint + '/ExecuteReports';


  let run = (reportData) => {
    let requestTransform = [ReportTransform.get("run")];
    let responseTransform = [ServicesTransform.get('noop')];
    let request = $http.post(`${endpoint}`,reportData,{
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      transformRequest: ReportTransform.generate(requestTransform),
      transformResponse: ServicesTransform.generate(responseTransform)
    })
    return request;
  }

  return {
    run
  };
};

export default reportService;
