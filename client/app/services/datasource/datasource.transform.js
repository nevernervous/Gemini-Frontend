import angular from 'angular';

let datasourceTransform = function ($http) {
  "ngInject";

  let _transformation = {
    noop: (response) => {
      return response
    },
    variables: (response) => {
      let variables = {
        items: _.chain(response.data).sortBy("order").value()
      }
      return variables;
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

export default datasourceTransform;
