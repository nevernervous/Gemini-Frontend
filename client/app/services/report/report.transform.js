import angular from 'angular';

let reportTransform = function ($http) {
  "ngInject";

  let _transformation = {
    noop: (response) => {
      return response
    }
    , simple: (response) => {
      response = response.data ? response.data : response;
      response.dataSource = {
        id: response.dataSourceId,
        name: response.dataSource,
        refreshDate: response.dataSourceRefreshDate
      };
      delete response.dataSourceId;
      return response;
    },
    save: (object) => {
      let data = {
        name: object.name
        , dataSourceId: object.dataSource.id
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

      return JSON.stringify(data);
    }
  }

  let get = (key) => {
    return _transformation[key] ? _transformation[key] : _transformation.noop;
  }

  let generate = (transformation = [_transformation.noop]) => {
    let transformations = [];
    let defaults = _.isArray($http.defaults.transformResponse) ? $http.defaults.transformResponse : [$http.defaults.transformResponse];
    transformation = _.isArray(transformation) ? transformation : [transformation];

    transformations.push(...defaults);
    transformations.push(...transformation);
    return transformations;
  }
  return {
    get
    , generate
  };
};

export default reportTransform;
