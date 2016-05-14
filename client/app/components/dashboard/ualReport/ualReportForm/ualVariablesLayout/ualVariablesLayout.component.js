import template from './ualVariablesLayout.html';
import controller from './ualVariablesLayout.controller';
import './ualVariablesLayout.scss';

let ualVariablesLayoutComponent = {
  restrict: 'E',
  bindings: {
    variables: "<",
    selecteds: "="
  },
  template,
/*  transclude:{
    ualVariablesLayoutFirst:'ualVariablesLayoutFirst'
  },*/
  controller,
  controllerAs: 'vm'
};

export default ualVariablesLayoutComponent;
