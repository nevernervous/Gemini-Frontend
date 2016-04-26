let ualReportService = function(Report) {
  "ngInject";

  let name = null
  let datasource = null;
  let reportData = null;
  let variables = [];
  let aggregators = [];
  let reportId = null;
  var touched = false;
  let saving = false;
  let duplicatedName = null;
  let unchangedName = null;

  let exitConfirmed = false;

  let create = () => {
    name = null;
    datasource = null;
    variables = [];
    aggregators = [];
    reportId = null;
    touched = false;
    saving = false;
    unchangedName = null;
  }

  let update = (reportData) => {
    datasource = reportData.datasource;
    variables = reportData.variables;
    aggregators = reportData.aggregators;
  };

  let getNameDuplicated = () => duplicatedName;
  let setNameDuplicated = value => duplicatedName = value;

  let getDataSource = () => datasource;
  let setDataSource = value => datasource = value;
  let equalDataSource = newDataSource => {
    return (datasource && datasource.id === newDataSource.id);
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

  let isEmptyName = () => {
    return !this.name || _.isEmpty(this.name);
  }


  let getName = () => name;
  let setName = value => {
    if(unchangedName === null) unchangedName = value;
    touched = true;
    name = value;
  }

  let remove = (ids) => {
    return Report.remove(ids);
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
    isEmptyName: isEmptyName,
    reportId: {
      get: getReportId,
      set: setReportId
    },
    nameDuplicated: {
      get: getNameDuplicated,
      set: setNameDuplicated
    },
    exitConfirmed: {
      get: isExitComfirmed,
      set: setExitConfirm,
    },
    untouch: function() { touched = false; unchangedName = name; },
    touched: function() { return touched; },
    name: {
      get: getName,
      set: setName,
      hasChange: () => { return unchangedName == name;},
    },
    _name: function(value) {
      return (angular.isDefined(value)) ? this.name.set(value) : this.name.get();
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
    remove,
    saving: {
      isSaving: isSaving,
      setSaving: setSaving
    }
  };
};

export default ualReportService;
