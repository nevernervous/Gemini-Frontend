import template from './ualAutocomplete.html';
import controller from './ualAutocomplete.controller';
import './ualAutocomplete.scss';

let ualAutocompleteComponent = {
  restrict: 'E',
  bindings: {
    onChange: '&?',
    placeholder: "@?",
    selected: "=",
    order: "<",
    property: "@?",
    list: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualAutocompleteComponent;
