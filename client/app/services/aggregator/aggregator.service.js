let aggregatorService = function(Properties, AggregatorTransform, $http) {
    "ngInject";
    const endpoint = Properties.endpoint + '/DataSources';

    let all = (datasource) => {
        let transformation = [AggregatorTransform.get('simple')];
        return $http.get(`${endpoint}/${datasource.id}/Aggregators`, {
            cache: Properties.cache,
            transformResponse: AggregatorTransform.generate(transformation)
        });
    }

    let groups = (datasource) => {
        let transformation = [AggregatorTransform.get('aggregators')];
        return $http.get(`${endpoint}/${datasource.id}/Aggregators`, {
            cache: Properties.cache,
            transformResponse: AggregatorTransform.generate(transformation)
        });
    };

    return {
        all,
        groups
    };
};

export default aggregatorService;
