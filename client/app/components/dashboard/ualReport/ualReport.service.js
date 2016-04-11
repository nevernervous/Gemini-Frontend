let ualReportService = function () {
  "ngInject";

  let datasource = null;
  let reportData = null;
  let variables = [];
  let aggregators = [];

  let create = () => {
    datasource = null;
    variables = [];
    aggregators = [];
  }
  
  let update = (reportData) => {
    datasource = reportData.datasource;
    variables = reportData.variables;
    aggregators = reportData.aggregators;
  };
  
  let getDataSource = () => datasource;
  let setDataSource = value => datasource = value;
  let equalDataSource = newDataSource => {
    return ( datasource && datasource.id === newDataSource.id );
  }

  let getVariables = () => variables;
  let setVariables = value => variables = value;

  let getAggregators = () => aggregators;
  let setAggregators = value => aggregators = value;
  
  let getReportData = () => reportData;
  let setReportData = value => reportData = value;

  return {
    update,
    create,
    get: getReportData,
    set: setReportData,
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
