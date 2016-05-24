let datasourceService = function (Properties, ServicesTransform, $http, $q) {
  "ngInject";
  const endpoint = Properties.endpoint + '/DataSources';

  let all = () => {
    let transformation = [ServicesTransform.get('simple'), ServicesTransform.get('group')];
    return $http.get(endpoint, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let groups = (datasource) => {
    let transformation = [ServicesTransform.get('simple')];
    return $http.get(`${endpoint}/${datasource.id}/ColumnGroups`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }

  let _serialize = (requests, deferred = $q.defer()) => {

    let head = _.head(requests);
    if (head) {
      $http(head).then(response => {
        const tails = _.drop(requests);
        if (_.isEmpty(tails)) {
          deferred.resolve(response);
        } else {
          deferred.notify(response);
          _serialize(tails, deferred)
        }
      });
    } else {
      deferred.resolve();
    }

    return deferred.promise;
  }

  let variables = (datasource) => {
    let deferred = $q.defer();
    let transformation = [ServicesTransform.get('simple')];

    $http.get(`${endpoint}/${datasource.id}/Columns`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    }).then(response => {
      let variables = {
        data: {
          items: response.data
        }
      }
      deferred.resolve(variables);
    }, error => deferred.reject(error)
    );

    return deferred.promise;
  }

  return {
    all, groups, variables
  };
};

export default datasourceService;
