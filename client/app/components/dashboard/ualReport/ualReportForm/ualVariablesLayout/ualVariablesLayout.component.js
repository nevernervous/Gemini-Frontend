import template from './ualVariablesLayout.html';
import controller from './ualVariablesLayout.controller';
import './ualVariablesLayout.scss';

let ualVariablesLayoutComponent = {
  restrict: 'E',
  bindings: {
    variables: "<",
    selecteds: "=",
    aggregators: "=",
    updateReportVariables: "=",
    updateReportAggregators: "="
  },
  template,
/*  transclude:{
    ualVariablesLayoutFirst:'ualVariablesLayoutFirst'
  },*/
  controller,
  controllerAs: 'vm'
};

export default ualVariablesLayoutComponent;
