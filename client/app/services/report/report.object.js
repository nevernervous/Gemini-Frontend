let reportObjectService = function (Properties, ServicesTransform, $http, $q) {
  "ngInject";

  const endpoint = Properties.endpoint + '/Reports';

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

  let duplicatedErrorResponse = "Report name already exists. Please select another.";

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

  let save = () => {
    var deferred = $q.defer();
    let reject = false;
    if (!getName() && !getReportId()) {
      deferred.reject('NONAMEASSIGNED');
      reject = true;
    }
    if (!touched) {
      deferred.reject('NOCHANGES');
      reject = true;
    }

    if (!reject) {
      saveRequest().then(
        response => {
          reportId = response.data.id;
          touched = false;
          deferred.resolve(reportId);
        }
        , response => {
          //UNEXPECTED ERROR
          if (!response.data || !response.data.errorMessages) {
            deferred.reject(false);
          } else if (response.data.errorMessages.indexOf(duplicatedErrorResponse) < 0) {
            //EXPECTED ERROR
            deferred.reject(response.data.errorMessage);
          } else {
            //DUPLICATED NAME
            deferred.reject('DUPLICATEDNAME');
          }
        }
      ).catch(() => {
        deferred.reject(false);
      });
      saving = false;
    }
    return deferred.promise;
  };

  let saveRequest = () => {
    saving = true;
    let dataSourceId = datasource.id;

    let data = {
      name: name
      , dataSourceId: dataSourceId
      , variables: []
      , aggregators: []
      , slicers: []
    };
    for (let i in variables) {
      data.variables.push({
        Id: variables[i].id
        , Name: variables[i].name
        , Order: i
      })
    }
    for (let i in aggregators) {
      data.aggregators.push({
        Id: aggregators[i].id
        , Name: aggregators[i].name
        , Order: i
      })
    }

    let transformation = [ServicesTransform.get('simple'), ServicesTransform.get('group')];
    if (reportId === null) {
      return $http.post(endpoint, data);
    } else {
      return $http.put(endpoint + "/" + reportId, data);
    }
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
    if (unchangedName === null) unchangedName = value;
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
    update
    , save
    , create
    , isEmptyName: isEmptyName
      , reportId: {
        get: getReportId
        , set: setReportId
      }
      , nameDuplicated: {
        get: getNameDuplicated
        , set: setNameDuplicated
      }
      , exitConfirmed: {
        get: isExitComfirmed
        , set: setExitConfirm
      , }
      , untouch: function () {
        touched = false;
        unchangedName = name;
      }
      , touched: function () {
        return touched;
      }
      , name: {
        get: getName
        , set: setName
        , hasChange: () => {
          return unchangedName == name;
        }
      }
      , _name: function (value) {
        return (angular.isDefined(value)) ? this.name.set(value) : this.name.get();
      }
      , datasource: {
        get: getDataSource
        , set: setDataSource
        , equal: equalDataSource
      }
      , variables: {
        get: getVariables
        , set: setVariables
      }
      , aggregators: {
        get: getAggregators
        , set: setAggregators
      }
      , saving: {
        isSaving: isSaving
        , setSaving: setSaving
      }
  };
};
export default reportObjectService;
