let ualReportService = function () {
  "ngInject";

  let datasource = null;
  let variables = [];
  let aggregators = [];

  let create = () => {
    datasource = null;
    variables = [];
    aggregators = [];
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

  return {
    create,
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
