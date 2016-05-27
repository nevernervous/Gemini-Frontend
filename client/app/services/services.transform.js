import angular from 'angular';

let servicesTransform = function($http, $filter) {
    "ngInject";

    let _transformation = {
        noop: (response) => {
            return response
        },
        simple: (response) => {
            return response ? response.data : response;
        },
        group: (response) => {
            let result = response.sort((item1, item2) => {
              return item1.group.groupId > item2.group.groupId ? 1 : (item1.group.groupId < item2.group.groupId ? -1 : 0);
            })

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
