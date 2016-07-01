import angular from 'angular';

let reportTransform = function ($http) {
  "ngInject";

  const operatorsMultiple = [9, 10];

  let transformFilters = (item, index, group) => {
    let isGroup = item.hasOwnProperty("children")
    if (isGroup) {
      let innerGroup = {
        "order": index + 1,
        "operator": {
          "id": item.operator.id
        },
        "filters": [],
        "children": []
      };

      _.forEach(item.children, (innerItem, innerIndex) => {
        transformFilters(innerItem, innerIndex, innerGroup);
      });
      group.children.push(innerGroup);
    }
    else {
      let isVariable = item.type == 'Variable';
      let hasSecondValue = _.includes(operatorsMultiple, item.operator.id);
      let value = [];

      if (isVariable) {
        value.push(item.value.id);
        if (hasSecondValue) {
          value.push(item.secondValue.id);
        }
      } else {
        value.push(item.value);
        if (hasSecondValue) {
          value.push(item.secondValue);
        }
      }

      group.filters.push({
        "column": {
          "id": item.variable.id
        },
        "filterOperator": {
          "id": item.operator.id
        },
        "value": value.join(','),
        "order": index + 1,
        "valueVariableTypeIndicator": isVariable
      });
    }

  };

  let _transformation = {
    noop: (response) => {
      return response
    }
    , simple: (response) => {
      response = response.data ? response.data : response;
      response.dataSource = {
        id: response.dataSourceId,
        name: response.dataSource,
        refreshDate: response.modificationDate
      };
      delete response.dataSourceId;
      return response;
    },
    save: (object) => {
      let data = {
        name: object.name
        , dataSourceId: object.dataSource.id
        , variables: []
        , aggregators: []
        , slicers: []
      };
      for (let i in object.variables) {
        data.variables.push({
          Id: object.variables[i].id
          , Name: object.variables[i].name
          , Order: i
        })
      }
      for (let i in object.aggregators) {
        data.aggregators.push({
          Id: object.aggregators[i].id
          , Name: object.aggregators[i].name
          , Order: i
        })
      }

      return JSON.stringify(data);
    },
    run: (report) => {
      let data = {
        dataSourceId: null,
        variables: [],
        aggregators: [],
        groups: []
      };

      let datasource = report.datasource.get();

      data.dataSourceId = datasource.id;

      let aggregators = report.aggregators.get();
      _.forEach(aggregators, (item) => {
        data.aggregators.push({
          "Id": item.id,
          "Order": item.order
        });
      });

      let variables = report.variables.get();
      _.forEach(variables, (item) => {
        data.variables.push({
          "Id": item.id,
          "Order": item.order
        });
      });

      let root = report.filters.get();
      let filters = root.children;

      let firstGroup = {
        "order": 1,
        "operator": {
          "id": root.operator.id,
        },
        "filters": [],
        "children": []
      };

      if (_.isArray(filters)) {
        _.forEach(filters, (item, index) => {
          transformFilters(item, index, firstGroup);
        });
      }

      data.groups = firstGroup;


      return JSON.stringify(data)
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
    get
    , generate
  };
};

export default reportTransform;
