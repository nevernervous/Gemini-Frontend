let aggregatorService = function(Properties, ServicesTransform, AggregatorTransform,  $http) {
    "ngInject";
    const endpoint = Properties.endpoint + '/DataSources';

    let all = (datasource) => {
        let transformation = [ServicesTransform.get('simple')];
        return $http.get(`${endpoint}/${datasource.id}/Aggregators`, {
            cache: Properties.cache,
            transformResponse: ServicesTransform.generate(transformation)
        });
    }

    let groups = (datasource) => {
        let transformation = [AggregatorTransform.get('grouped')];
        return $http.get(`${endpoint}/${datasource.id}/Aggregators`, {
            cache: Properties.cache,
            transformResponse: ServicesTransform.generate(transformation)
        });
    };

    return {
        all,
        groups
    };
};

export default aggregatorService;
