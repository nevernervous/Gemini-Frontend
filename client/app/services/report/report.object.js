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
  let initialHash = null;

  let reportData = null;
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
    initialHash = getReportHash();
    touched = false;
    saving = false;
    unchangedName = null;
  }

  let loadReportById = (reportId) => {
    create();
    Report.getById(reportId).then(
    );
  }
  let load = (reportData) => {
    object = reportData;
    initialHash = getReportHash();
  };

  let update = (reportData) => {
    object.dataSource = reportData.datasource;
    object.variables = reportData.variables;
    object.aggregators = reportData.aggregators;
  };

  let hasReportChange = () => {
    return getReportHash() != initialHash;
  };

  let getReportHash = () => {
	let hash = 0;
    let char = '';
    let json = JSON.stringify(object);
	if (json.length == 0) return hash;
	for (let i = 0; i < json.length; i++) {
		char = json.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
  }

  let save = () => {
    var deferred = $q.defer();
    let reject = false;
    if (!getName() && !getReportId()) {
      deferred.reject({code:1, msg: "No name assigned"});
      reject = true;
    }else if (!touched) {
      deferred.reject({code:0, msg: "No changes to save"});
      reject = true;
    } else {
      saveRequest().then(
        response => {
          object.id = response.data.id;
          unchangedName = object.name;
          touched = false;

          initialHash = getReportHash();

          deferred.resolve(object.id);
        }
        , response => {
          //UNEXPECTED ERROR
          if (!response.data || !response.data.errorMessages) {
            deferred.reject({code:3, msg: ""});
          } else if (response.data.errorMessages.indexOf(duplicatedErrorResponse) < 0) {
            //EXPECTED ERROR
            deferred.reject({code:3, msg: response.data.errorMessage});
          } else {
            //DUPLICATED NAME
            deferred.reject({code:2, msg: "Name already exists"});
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

//    let transformation = [ServicesTransform.get('simple'), ServicesTransform.get('group')];
    if (object.id === null) {
      return $http.post(endpoint, data);
    } else {
      return $http.put(endpoint + "/" + object.id, data);
    }
  };

  let getNameDuplicated = () => duplicatedName;
  let setNameDuplicated = value => duplicatedName = value;
  let getDataSource = () => {
    return (object.dataSourceId) ? {
      name: object.dataSource
      , id: object.dataSourceId
    } : null;
  }
  let setDataSource = value => {
    object.dataSourceId = value.id;
    object.dataSource = value.name;

    touched = hasReportChange();
  }
  let equalDataSource = newDataSource => {
    return (object.dataSource && object.dataSourceId === newDataSource.id);
  }

  let getVariables = () => object.variables;
  let setVariables = value => {
    console.log(value);
    object.variables = value;
    touched = hasReportChange();
  }

  let getAggregators = () => object.aggregators;
  let setAggregators = value => {
    object.aggregators = value;
    touched = hasReportChange();
  }

  let isEmptyName = () => {
    return !object.name || _.isEmpty(object.name);
  }


  let getName = () => object.name;
  let setName = value => {
    if (unchangedName === null) unchangedName = value;
    object.name = value;
    touched = hasReportChange();
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
