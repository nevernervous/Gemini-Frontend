let ualReportService = function () {
  "ngInject";
  
  let name = null
  let datasource = null;
  let variables = [];
  let aggregators = [];
  let reportId = null;
  var touched = false;
  
  let exitConfirmed = false;
  
  let create = () => {
    name = null;
    datasource = null;
    variables = [];
    aggregators = [];
    reportId = null;
    touched = false;
  }

  let getDataSource = () => datasource;
  let setDataSource = value => datasource = value;
  let equalDataSource = newDataSource => {
    return ( datasource && datasource.id === newDataSource.id );
  }

  let getVariables = () => variables;
  let setVariables = value => {
    touched = true;  
    variables = value;
  }

  let getAggregators = () => aggregators;
  let setAggregators = value => {
    touched = true;  
    aggregators = value;
  }

  let getName = () => name;
  let setName = value =>{
    touched = true;  
    name = value;
  }
  
  let getReportId = () => reportId;
  let setReportId = value => reportId = value;
  
  let isExitComfirmed = () => exitConfirmed;
  let setExitConfirm = (value) => exitConfirmed = value;
  return {
    create,
    reportId: {
      get: getReportId,  
      set: setReportId
    },
    exitConfirmed:{
        get: isExitComfirmed,
        set: setExitConfirm,
    },
    untouch: function(){ touched = false; },
    touched: function() { return touched; },
    name: {
        get: getName,
        set: setName
    },
    _name: function(value){
      return (angular.isDefined(value))? this.name.set(value): this.name.get();  
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
    },
  };
};

export default ualReportService;
