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
      return transformReportFromJSON(report);
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

  const transformReportFromJSON = (data) => {
    let report = {
      id: data.id,
      name: data.name
    }

    // DATASOURCE
    report.dataSource = {
      id: data.dataSourceId,
      name: data.dataSource
    }

    // VARIABLES
    report.variables = data.variables;
    report.aggregators = data.aggregators;

    // FILTERS
    report.filters = {};
    if ( data.groups && data.groups.length > 0 ) {
      report.filters = transformFromGroups(data.groups[0], data.groups);
    }

    return report;
  }

  const transformFromGroups = (group, groups) => {
    let filters = {
      id: group.id,
      order: group.order,
      not: group.not,
      operator: group.operator,
      children: []
    }

    const conditions = group.filters;
    _.each(groups, condition => {
      if ( condition.parent.id === group.id ) {
        conditions.push(item);
      }
    });

    _.chain(conditions)
    // TODO: ORDER BY
    .each(condition => {
      if ( condition.hasOwnProperty('filters') ) {
        filters.children.push(transformFromGroups(condition, groups));
      } else {
        filters.children.push(transformFromFilter(condition));
      }
    });

    return filters;
  }

  const transformFromFilter = (condition) => {
    let filter = {
      id: condition.id,
      order: condition.order,
      variable: condition.column,
      operator: condition.filterOperator,
      type: condition.valueVariableTypeIndicator ? 'Variable' : 'Value',
      value: condition.value,
      secondValue: condition.secondValue
    }

    return filter;
  }

  const transformReportToJSON = (report) => {
    let data = {};

    // DATASOURCE
    data.dataSourceId = report.datasource.get().id;

    // AGGREGATORS & VARIABLES
    data.aggregators = transformToVariables(report.aggregators.get());
    data.variables = transformToVariables(report.variables.get());

    // FILTERS
    data.groups = transformToGroups(report.filters.get());

    return data;
  }

  const transformToVariables = (variables) => {
    return _.map(variables, item => {
      return {
        Id: item.id,
        Order: item.order
      }
    });
  }

  const transformToGroups = (condition, index = 1, parent = null, groups = []) => {
    if ( condition.hasOwnProperty('children') ) {
      const group = transformToGroup(condition, index, parent);

      groups.push(group);
      _.each(condition.children, next => {
        transformToGroups(next, index++, group, groups)
      });

    } else {
      const filter = transformToFilter(condition, index);
      parent.Filters.push(filter);
    }

    return groups;
  }

  const transformToGroup = (item, index, parent) => {
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

  const transformToFilter = (item, index) => {
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
