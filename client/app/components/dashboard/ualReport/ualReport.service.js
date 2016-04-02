let ualReportService = function () {
  "ngInject";
  
  let name = null
  let datasource = null;
  let variables = [];
  let aggregators = [];
  let reportId = null;
  
  let create = () => {
    name = "null";
    datasource = null;
    variables = [];
    aggregators = [];
    reportId = null;
  }

  let getDataSource = () => datasource;
  let setDataSource = value => datasource = value;
  let equalDataSource = newDataSource => {
    return ( datasource && datasource.id === newDataSource.id );
  }

  let getVariables = () => variables;
  let setVariables = value => variables = value;

  let getAggregators = () => aggregators;
  let setAggregators = value => aggregators = value;

  let getName = () => name;
  let setName = value => name = value;
  
  let getReportId = () => reportId;
  let setReportId = value => reportId = value;
  
  return {
    create,
    reportId: {
      get: getReportId,  
      set: setReportId
    },
    name: {
        get: getName,
        set: setName
    },
    datasource: {
      get: getDataSource,
      set: setDataSource,
      equal: equalDataSource
    },
    variables: {
      get: getVariables,
      set: setVariables
    },
    aggregators: {
      get: getAggregators,
      set: setAggregators
    }
  };
};

export default ualReportService;
