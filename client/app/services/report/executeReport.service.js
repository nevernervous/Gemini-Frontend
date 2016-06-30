let reportService = function (Properties, $http, ReportObject, ReportTransform) {
  "ngInject";
  const endpoint = Properties.endpoint + '/Reports';


  let run = () => {
    let requestTransform = [ReportTransform.get("run")];
    let request = $http.post(`${endpoint}`,{
      cache: Properties.cache,
      data: ReportObject,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      transformRequest: ReportTransform.generate(requestTransform)
    })
  }

  return {
    run
  };
};

export default reportService;
