import angular from 'angular';

let servicesTransform = function ($http) {
  "ngInject";

  let _transformation = {
    noop: (response) => {
      return response
    },
    simple: (response) => {
      return response ? response.data : response;
    },
    sort: (response) => {
      var options = {
        attributes: ['group.order','group.groupId', 'order'],
        direction: ['asc', 'asc', 'asc']
      };
      let result = _.sortByOrder(response, options.attributes, options.direction);

      return result;
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
    get,
    generate
  };
};

export default servicesTransform;
