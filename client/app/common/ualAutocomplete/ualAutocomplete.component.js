import template from './ualAutocomplete.html';
import controller from './ualAutocomplete.controller';
import './ualAutocomplete.scss';

let ualAutocompleteComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    items: '<',
    selected: '=itemSelected',
    property: '@itemProperty',
    width: '@inputWidth',
    placeholder: '@',
    ngRequired: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualAutocompleteComponent;
