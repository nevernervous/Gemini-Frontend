
let operatorService = function (Properties, $http, $q, ServicesTransform, OperatorTransform) {

  "ngInject";
  const endpoint = Properties.endpoint + '/FilterOperatorDatatype';

  let all = () => {
    let transformation = [OperatorTransform.get('grouped')];
    return $http.get(endpoint, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }


  return {
    all
  };
};

export default operatorService;
