let ualReportService = function () {
  "ngInject";
  
  let name = null
  let datasource = null;
  let reportData = null;
  let variables = [];
  let aggregators = [];
  let reportId = null;
  var touched = false;
  let saving = false;
  
  let exitConfirmed = false;
  
  let create = () => {
    name = null;
    datasource = null;
    variables = [];
    aggregators = [];
    reportId = null;
    touched = false;
    saving = false;
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
  let setVariables = value => {
    touched = true;  
    variables = value;
  }

  let getAggregators = () => aggregators;
  
  let setAggregators = value => {
    touched = true;  
    aggregators = value;
  }
  let getReportData = () => reportData;
  let setReportData = value => reportData = value;
  

  let getName = () => name;
  let setName = value =>{
    touched = true;  
    name = value;
  }
  
  let getReportId = () => reportId;
  let setReportId = value => reportId = value;
  
  let isExitComfirmed = () => exitConfirmed;
  let setExitConfirm = (value) => exitConfirmed = value;
  
  let isSaving = () => saving;
  let setSaving = (value) => saving = value;
  
  return {
    update,
    create,
    get: getReportData,
    set: setReportData,
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
    saving: {
        isSaving: isSaving,
        setSaving: setSaving
    }
  };
};

export default ualReportService;
