import template from './ualAutocomplete.html';
import controller from './ualAutocomplete.controller';
import './ualAutocomplete.scss';

let ualAutocompleteComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    items: '<',
    name: '@',
    selected: '=itemSelected',
    property: '@itemProperty',
    width: '@inputWidth',
    placeholder: '@',
    required: '<ngRequired',
    errors: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualAutocompleteComponent;
