import template from './ualAutocompleteItem.html';
import controller from './ualAutocompleteItem.controller';
import './ualAutocompleteItem.scss';


class ualAutocompleteItemDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.transclude = true;
    this.template = template;
    this.controller = controller;
    this.controllerAs = 'vm';

    this.scope = {
      ngDisabled: '='
    };
  }

  link($scope, elem, attr, ctrl) {

  }
}

export default ualAutocompleteItemDirective;
