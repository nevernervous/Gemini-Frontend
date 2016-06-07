import template from './ualFilterCondition.html';
import controller from './ualFilterCondition.controller';
import './ualFilterCondition.scss';

let ualFilterConditionComponent = {
  restrict: 'E',
  bindings: {
     datasource : "<",
     operator : "=",
     index : "=",
     availableVariables : "<",
     operatorsList :"<" 
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualFilterConditionComponent;
