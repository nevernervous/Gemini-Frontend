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
    if ( head ) {
      $http(head).then( response => {
        const tails = _.drop(requests);
        if ( _.isEmpty(tails) ) {
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
    let response = {
      data: { groups: [], items: [] }
    };


    groups(datasource)
    .then(groups => {

      // CREATE REQUEST ARRAY
      let transformation = [ServicesTransform.get('simple')];
      let requests = _.map(groups.data, group => {
        return {
          method: 'GET',
          url: `${endpoint}/${datasource.id}/ColumnGroups/${group.groupId}/Columns`,
          cache: Properties.cache,
          transformResponse: ServicesTransform.generate(transformation)
        }
      });

      // FIRST NOTIFICATION WITH EMPTY GROUPS
      response.data.groups = _.map(groups.data, group => {
        return { data: group }
      });
      deferred.notify(response);

      // SERIALIZATION REQUEST
      _serialize(requests)
      .then(
        done => { // RESOLVE PROMISE WITH LAST NOTIFICATION
          if (done) {
            let group = _.find(response.data.groups, group => group.data.groupId === done.data[0].group.groupId);
            if (group) group.items = done.data;
            response.data.items = _.union(response.data.items, done.data);
          }
          deferred.resolve(response);
        },
        error => deferred.reject(error),
        progress => { // NOTIFICATION FOR EACH GROUP VARIABLES
          let group = _.find(response.data.groups, group => group.data.groupId === progress.data[0].group.groupId);
          if (group) group.items = progress.data;
          response.data.items = _.union(response.data.items, progress.data);
          deferred.notify(response);
        }
      )
    });

    return deferred.promise;
  }

  return {
    all, groups, variables
  };
};

export default datasourceService;
