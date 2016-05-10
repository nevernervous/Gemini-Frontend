let reportService = function (Properties, ServicesHelper, ServicesTransform, $http, $q) {
  "ngInject";
  const endpoint = Properties.endpoint + '/Reports';
  const pageSize = 50;

  let all = (fromPage, total, sortColumn, sortDirection) => {
    let requests = [];
    let current = (fromPage - 1) * pageSize;
    while (current < total) {
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
    let transformation = [ServicesTransform.get('none')];
    return $http.get(`${endpoint}/${reportId}`, {
      cache: Properties.cache,
      transformResponse: ServicesTransform.generate(transformation)
    });
  };

  let saveReport = (report) => {
    report.saving.setSaving(true);

    let dataSourceId = report.datasource.get().id;
    let variables = report.variables.get();
    let aggregators = report.aggregators.get();

    let data = {
      name: report.name.get(),
      dataSourceId: dataSourceId,
      variables: [],
      aggregators: [],
      slicers: []
    };

    for (let i in variables) {
      data.variables.push({ Id: variables[i].id, Order: i })
    }
    for (let i in aggregators) {
      data.aggregators.push({ Id: aggregators[i].id, Order: i })
    }

    let transformation = [ServicesTransform.get('simple'), ServicesTransform.get('group')];
    if (report.reportId.get() === null) {
      return $http.post(endpoint, data);
    } else {
      return $http.put(endpoint + "/" + report.reportId.get(), data);
    }
  }

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
    first,
    save: saveReport,
    remove,
    getById
  };
};

export default reportService;

