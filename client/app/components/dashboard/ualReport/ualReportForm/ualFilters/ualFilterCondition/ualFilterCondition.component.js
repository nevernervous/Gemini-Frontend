import template from './ualFilterCondition.html';
import controller from './ualFilterCondition.controller';
import './ualFilterCondition.scss';

let ualFilterConditionComponent = {
  restrict: 'E',
  bindings: {
     condition : "=",
     operatorGroup : "=",
     index : "=",
     availableVariables : "<",
     operatorsList :"<",
     removeCondition:"&"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualFilterConditionComponent;
