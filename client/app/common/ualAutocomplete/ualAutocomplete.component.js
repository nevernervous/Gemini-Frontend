import template from './ualAutocomplete.html';
import controller from './ualAutocomplete.controller';
import './ualAutocomplete.scss';

let ualAutocompleteComponent = {
  restrict: 'E',
  transclude: true,
  require:{
    modelCtrl: '?ngModel'
  },
  bindings: {
    onChange: '&?',
    placeholder: "@?",
    selected: "=",
    property: "@?",
    list: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualAutocompleteComponent;
