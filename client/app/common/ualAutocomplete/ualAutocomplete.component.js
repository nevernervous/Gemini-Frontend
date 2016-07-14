import template from './ualAutocomplete.html';
import controller from './ualAutocomplete.controller';
import './ualAutocomplete.scss';

let ualAutocompleteComponent = {
  restrict: 'E',
  bindings: {
    items: '<',
    selected: '=itemSelected',
    property: '@itemProperty',
    width: '@inputWidth'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualAutocompleteComponent;
