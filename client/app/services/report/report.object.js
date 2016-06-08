let reportObjectService = function (Properties, ServicesTransform, $http, $q, ReportTransform) {
  "ngInject";

  const endpoint = Properties.endpoint + '/Reports';

  let object = {
    id: null,
    name: null,
    dataSource: { id: null, name: null },
    variables: [],
    aggregators: [],
    filters: {
      not: false,
      operator: "AND",
      children: []
    }
  };
  let initialHash = null;

  let reportData = null;
  var touched = false;
  let unchangedName = null;
  let exitConfirmed = false;

  let duplicatedErrorResponse = "Report name already exists. Please select another.";

  let saveResultMessages = [
    {
      type: "-success"
      , text: "Report saved successfully."
    }
    , {
      type: "-error"
      , text: "Report name already exists. Please select another."
    }
    , {
      type: "-error"
      , text: "The report was not saved due to an unexpected error. Please try again or contact the Gemini administrator."
    }
  ];

  let clean = () => {
    object = {
      id: null,
      name: null,
      dataSource: { id: null, name: null },
      variables: [],
      aggregators: [],
      filters: {
        not: false,
        operator: "AND",
        children: []
      }

    };
    initialHash = getReportHash();
    touched = false;
    unchangedName = null;
  }

  let load = (reportData) => {
    object = reportData;
    unchangedName = object.name;
    initialHash = getReportHash();
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
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  let save = () => {
    var deferred = $q.defer();
    if (!getName()) {
      deferred.reject({ code: 1, msg: "No name assigned" });
    } else if (!touched) {
      deferred.reject({ code: 0, msg: saveResultMessages[0] });
    } else {
      saveRequest().then(
        response => {
          object.id = response.data.id;
          unchangedName = object.name;
          touched = false;

          initialHash = getReportHash();

          deferred.resolve({ result: object.id, msg: saveResultMessages[0] });
        }
        , response => {
          // TODO: REFACTOR THIS CODE. USE 'errorCode' instead of check 'errorMessages'
          if (!response.data || !response.data.errorMessages) {
            //UNEXPECTED ERROR
            object.name = unchangedName;
            deferred.reject({ code: 3, msg: saveResultMessages[2] });
          } else if (response.data.errorMessages.indexOf(duplicatedErrorResponse) < 0) {
            //EXPECTED ERROR
            object.name = unchangedName;
            let tmp = _.clone(saveResultMessages[2]);
            tmp.msg = response.data.errorMessage;
            deferred.reject({ code: 3, msg: tmp });
          } else {
            //DUPLICATED NAME
            deferred.reject({ code: 2, msg: "Name already exists" });
          }
        }
      ).catch(() => {
        deferred.reject(false);
      });
    }
    return deferred.promise;
  };

  let saveRequest = () => {

    let transformation = [ReportTransform.get('save')];
    if (object.id === null) {
      return $http.post(endpoint, object, { transformRequest: ReportTransform.generate(transformation) });
    } else {
      return $http.put(endpoint + "/" + object.id, object, { transformRequest: ReportTransform.generate(transformation) });
    }
  };

  let getDataSource = () => {
    return (object.dataSource.id) ? object.dataSource : null;
  }
  let setDataSource = value => {
    if (!equalDataSource(value)) {
      object.variables = [];
      object.filters = [];
      object.aggregators = [];
      object.dataSource = value;
      touched = hasReportChange();
    }
  }
  let equalDataSource = newDataSource => {
    return (object.dataSource && object.dataSourceId === newDataSource.id);
  }

  let getVariables = () => object.variables;
  let setVariables = value => {
    object.variables = value;
    touched = hasReportChange();
  }
  let hasVariablesValues = () => {
    return !!object.variables && object.variables.length > 0;
  }

  let getAggregators = () => object.aggregators;
  let setAggregators = value => {
    object.aggregators = value;
    touched = hasReportChange();
  }
  let hasValuesAggregators = () => {
    return !!object.aggregators && object.aggregators.length > 0;
  }

  let getFilters = () => object.filters;
  let setFilters = value => {
    object.filters = value;
    touched = hasReportChange();
  }
  let hasFilterValues = () => {
    return !!object.filters && object.filters.length > 0;
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

  let getId = () => object.id;
  let setId = value => object.id = value;
  let isExitComfirmed = () => exitConfirmed;
  let setExitConfirm = (value) => exitConfirmed = value;
  return {
    save
    , load
    , clean
    , isEmptyName: isEmptyName
    , id: {
      get: getId
      , set: setId
    }
    , exitConfirmed: {
      get: isExitComfirmed
      , set: setExitConfirm
      ,
    }
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
        let _unchanged = (unchangedName) ? unchangedName.toLowerCase() : "";
        let _actual = (object.name) ? object.name.toLowerCase() : "";
        return _unchanged == _actual;
      }
    }
    , datasource: {
      get: getDataSource,
      set: setDataSource,
      equal: equalDataSource
    },
    variables: {
      get: getVariables,
      set: setVariables,
      hasValues: hasVariablesValues
    },
    aggregators: {
      get: getAggregators,
      set: setAggregators,
      hasValues: hasValuesAggregators
    },
    filters: {
      get: getFilters,
      set: setFilters,
      hasValues: hasFilterValues
    },
    _filters: object.filters
  };
};
export default reportObjectService;
