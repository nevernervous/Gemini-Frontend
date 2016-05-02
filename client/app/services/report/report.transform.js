import angular from 'angular';

let reportTransform = function($http) {
    "ngInject";

    let _transformation = {
        noop: (response) => {
            return response
        },
        simple: (response) => {
          response = response.data ? response.data : response;
          response.dataSource = {id:response.dataSourceId, name: response.dataSource};
          delete response.dataSourceId;
          return response;
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

export default reportTransform;
