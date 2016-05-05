let reportService = function (Properties, ServicesHelper, ServicesTransform, $http, $q, ReportObject, ReportTransform) {
  "ngInject";
  const endpoint = Properties.endpoint + '/Reports';
  const pageSize = 50;

  let create = () => {
    ReportObject.clean();
    return ReportObject;
  };

  let currentReport = () => {
    return ReportObject;
  };

  let all = (fromPage, total, sortColumn, sortDirection) => {
    let requests = [];
    let current = (fromPage - 1) * pageSize;
    while ( current < total ) {
      requests.push(_query(fromPage, sortColumn, sortDirection));
      fromPage++;
      current = (fromPage - 1) * pageSize;
    }

    return ServicesHelper.serialize(requests);
  }

  let first = (sortColumn, sortDirection) => {
    let request = _query(1, sortColumn, sortDirection);
    return $http(request);
  }

  let _query = (pageNumber, sortColumn, sortDirection) => {
    let transformation = [ServicesTransform.get('noop')];
    return {
      method: 'GET',
      url: `${endpoint}?PageNumber=${pageNumber}&PageSize=${pageSize}&SortColumn=${sortColumn}&SortDirection=${sortDirection}`,
      cache: false,
      transformResponse: ServicesTransform.generate(transformation)
    }
  }

  let getById = (reportId) => {
    let transformation = [ReportTransform.get('simple')];
    return $http.get(`${endpoint}/${reportId}`, {
      cache: Properties.cache
      , transformResponse: ReportTransform.generate(transformation)
    }).then(
      response => {
        ReportObject.clean();
        ReportObject.load(response.data);
        return ReportObject;
      });
  };

  let remove = (ids) => {
    let transformation = [ServicesTransform.get('none')];
    let request = $http.delete(`${endpoint}`, {
      cache: Properties.cache,
      data: ids,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      transformResponse: ServicesTransform.generate(transformation)
    });
    return request;
  }

  return {
    all,
    create,
    currentReport,
    first,
    remove,
    getById
  };
};

export default reportService;
