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
    let request;
    if (ids.length == 1) {
      let [id] = ids;
      request = $http.delete(`${endpoint}/${id}`, {
        cache: Properties.cache,
        transformResponse: ServicesTransform.generate(transformation)
      });
    } else{
      request = $http.delete(`${endpoint}`, {
        cache: Properties.cache,
        data: ids,
        headers : {
          "Content-Type": "application/json;charset=UTF-8",
        },
        transformResponse: ServicesTransform.generate(transformation)
      });
    }

    return request;
  }

  return {
    all,
    save: saveReport,
    getById,
    remove
  };
};

export default reportService;
