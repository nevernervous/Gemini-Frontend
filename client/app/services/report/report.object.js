let reportObjectService = function (Properties, ServicesTransform, $http, $q) {
  "ngInject";

  const endpoint = Properties.endpoint + '/Reports';

  let object = {
    id: null
    , name: null
    , dataSource: null
    , dataSourceId: null
    , variables: []
    , aggregators: []
  };
//  let name = null
//  let datasource = null;
  let reportData = null;
//  let variables = [];
//  let aggregators = [];
//  let reportId = null;
  var touched = false;
  let saving = false;
  let duplicatedName = null;
  let unchangedName = null;
  let exitConfirmed = false;

  let duplicatedErrorResponse = "Report name already exists. Please select another.";

  let create = () => {
    object = {
      id: null
      , name: null
      , dataSource: null
      , dataSourceId: null
      , variables: []
      , aggregators: []
    };
/*    name = null;
    datasource = null;
    variables = [];
    aggregators = [];
    reportId = null;*/
    touched = false;
    saving = false;
    unchangedName = null;
  }

  let load = (reportData) => {
    object = reportData;
  };

  let update = (reportData) => {
    object.dataSource = reportData.datasource;
    object.variables = reportData.variables;
    object.aggregators = reportData.aggregators;
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
          object.id = response.data.id;
          unchangedName = object.name;
          touched = false;
          deferred.resolve(object.id);
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

    let data = {
      name: object.name
      , dataSourceId: object.dataSourceId
      , variables: []
      , aggregators: []
      , slicers: []
    };
    for (let i in object.variables) {
      data.variables.push({
        Id: object.variables[i].id
        , Name: object.variables[i].name
        , Order: i
      })
    }
    for (let i in object.aggregators) {
      data.aggregators.push({
        Id: object.aggregators[i].id
        , Name: object.aggregators[i].name
        , Order: i
      })
    }

    let transformation = [ServicesTransform.get('simple'), ServicesTransform.get('group')];
    if (object.id === null) {
      return $http.post(endpoint, data);
    } else {
      return $http.put(endpoint + "/" + object.id, data);
    }
  };

  let getNameDuplicated = () => duplicatedName;
  let setNameDuplicated = value => duplicatedName = value;
  let getDataSource = () => {
    return (object.dataSourceId)?{name: object.dataSource, id: object.dataSourceId}:null;
  }
  let setDataSource = value =>{
    object.dataSourceId = value.id;
    object.dataSource = value.name;
  }
  let equalDataSource = newDataSource => {
    return (object.dataSource && object.dataSourceId === newDataSource.id);
  }

  let getVariables = () => object.variables;
  let setVariables = value => {
    touched = true;
    object.variables = value;
  }

  let getAggregators = () => object.aggregators;
  let setAggregators = value => {
    touched = true;
    object.aggregators = value;
  }

  let isEmptyName = () => {
    return !object.name || _.isEmpty(object.name);
  }


  let getName = () => object.name;
  let setName = value => {
    if (unchangedName === null) unchangedName = value;
    touched = true;
    object.name = value;
  }

  let getReportId = () => object.id;
  let setReportId = value => object.id = value;
  let isExitComfirmed = () => exitConfirmed;
  let setExitConfirm = (value) => exitConfirmed = value;
  let isSaving = () => saving;
  let setSaving = (value) => saving = value;
  return {
    update
    , save
    , load
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
