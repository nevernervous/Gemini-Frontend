import angular from 'angular';

let aggregatorTransform = function() {
    "ngInject";

    let _transformation = {
        grouped: (response) => {
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
        return _transformation[key] ? _transformation[key] : _transformation.grouped;
    }

    return {
        get
    };
};

export default aggregatorTransform;