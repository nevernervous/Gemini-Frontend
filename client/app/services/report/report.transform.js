import angular from 'angular';

let reportTransform = function ($http) {
  "ngInject";

  // TODO: [REFACTOR] BACKEND TO ADD FLAG INDICATION WHITCH OPERATORS ARE MULTIPLES
  const operatorsMultiple = ["between", "not between"];

  let _transformation = {
    noop: (response) => {
      return response
    },
    simple: (response) => {
      response = response.data ? response.data : response;
      response.dataSource = {
        id: response.dataSourceId,
        name: response.dataSource,
        refreshDate: response.modificationDate
      };
      delete response.dataSourceId;
      return response;
    },
    reportToJSON: (report) => {
      return transformReportToJSON(report);
    },
    reportFromJSON: (report) => {
      // let data = transformReportToJSON(report);
      // return JSON.stringify(data)
    },
    reportExecute: (response) => {
      let data = {
        table: {},
        slicers: []
      }

      // TABLE
      data.table.data = response.data;
      data.table.headers = _.map(response.headers, item => item.name );

      // SLICERS
      // TODO: [FIX] Sort by Type
      data.slicers = response.headers;
      _.each(data.slicers, (item, index) => {
        item.values = _.chain(response.data)
          .map(row => row[index])
          .flatten()
          .uniq()
          .value();
      });

      return data;
    }
  }

  const transformReportToJSON = (report) => {
    let data = {};

    // DATASOURCE
    data.dataSourceId = report.datasource.get().id;

    // AGGREGATORS & VARIABLES
    data.aggregators = transformVariables(report.aggregators.get());
    data.variables = transformVariables(report.variables.get());

    // FILTERS
    data.groups = transformGroups(report.filters.get());

    return data;
  }

  const transformVariables = (variables) => {
    return _.map(variables, item => {
      return {
        Id: item.id,
        Order: item.order
      }
    });
  }

  const transformGroups = (condition, index = 1, parent = null, groups = []) => {
    if ( condition.hasOwnProperty("children") ) {
      const group = transformGroup(condition, index, parent);

      groups.push(group);
      _.each(condition.children, next => {
        transformGroups(next, index++, group, groups)
      });

    } else {
      const filter = transformFilter(condition, index);
      parent.Filters.push(filter);
    }

    return groups;
  }

  const transformGroup = (item, index, parent) => {
    let group = {
      order: index,
      Not: item.not,
      operator: {
        id: item.operator.id,
      },
      Filters: []
    }
    // PARENT
    if ( parent ) {
      group.parent = {
        order: parent.order
      }
    }

    return group;
  }

  const transformFilter = (item, index) => {
    let filter = {
      column: {
        id: item.variable.id
      },
      FilterOperator: {
        id: item.operator.id
      },
      order: index,
      valueVariableTypeIndicator: (item.type == 'Variable')
    }

    // VALUES
    const hasSecondValue = _.includes(operatorsMultiple, item.operator.operator);
    let value = [];
    value.push(isVariable ? item.value.id : item.value);
    if (hasSecondValue) {
      value.push(isVariable ? item.secondValue.id : item.secondValue);
    }
    filter.value = value.join(',');

    return filter;
  }

  let get = (key) => {
    return _transformation[key] ? _transformation[key] : _transformation.noop;
  }

  return {
    get
  };
};

export default reportTransform;
