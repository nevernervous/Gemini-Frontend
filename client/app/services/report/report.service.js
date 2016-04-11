let reportService = function (Properties, ServicesTransform, $http, $q) {
  "ngInject";
  const endpoint = Properties.endpoint + '/Reports';

  let all = () => {
    let transformation = [ServicesTransform.get('simple')];
    return $http.get(endpoint, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  }
  
  let deleteReport= (id) => {
    let transformation = [ServicesTransform.get('simple')];
    return $http.delete(endpoint+"/"+id, {
       cache: Properties.cache,
       transformResponse: ServicesTransform.generate(transformation) 
    });  
  }
  
  return {
      all,
      delete: deleteReport
  };
};

export default reportService;
