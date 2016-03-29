import angular from 'angular';

let aggregatorTransform = function($http) {
    "ngInject";

    let _transformation = {
        noop: (response) => {
            return response
        },
        simple: (response) => {
            return response ? response.data : response;
        },
        aggregators: (response) => {
            let groups = _.chain(response.data)
                .map('isDefaultAggregator')
                .uniq()
                .map((isRecomend) => {
                    return {
                        name: isRecomend ? "Recommended aggregators" : "Others",
                        items: _.chain(response.data)
                            .filter('isDefaultAggregator', isRecomend)
                            .sortBy('order')
                            .value()
                    }
                })
                .toArray()
                .value();
            return {
                groups,
                items: response.data
            }
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

export default aggregatorTransform;