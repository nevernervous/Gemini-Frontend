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
    let transformation = [ServicesTransform.get('none')];
    return $http.get(`${endpoint}/${reportId}`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  };
  
  let saveReport = (report) =>{
        report.saving.setSaving(true);

        let dataSourceId = report.datasource.get().id;
        let variables = report.variables.get();
        let aggregators = report.aggregators.get();
        console.log(report);
        let data = {
            name: report.name.get(),
            dataSourceId: dataSourceId,
            variables: [],
            aggregators: [],
            slicers: []
        };
        for(let i in variables){
            data.variables.push({Id:variables[i].id,Order:variables[i].order})
        }
        for(let i in aggregators){
            data.aggregators.push({Id:aggregators[i].id,Order:aggregators[i].order})
        }

        let transformation = [ServicesTransform.get('simple'), ServicesTransform.get('group')];
        if(report.reportId.get() === null){
            return $http.post(endpoint, data);
        }else{
            return $http.put( endpoint+"/"+report.reportId.get() , data );
        }
  }
  return {
      all,
      save: saveReport,
      getById
  };
};

export default reportService;