import angular from 'angular';

let servicesTransform = function($http) {
    "ngInject";

    let _transformation = {
        noop: (response) => {
            return response
        },
        simple: (response) => {
            return response ? response.data : response;
        },
        group: (response) => {

            let groups = _.chain(response)
                .map('group')
                .uniq('groupId')
                .map(group => {
                    return {
                        data: group,
                        items: _.chain(response).filter('group.groupId', group.groupId).sortBy("order").value()
                    }
                })
                .sortBy("data.order")
                .value();

            return {
                groups: groups,
                items: response
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

export default servicesTransform;
