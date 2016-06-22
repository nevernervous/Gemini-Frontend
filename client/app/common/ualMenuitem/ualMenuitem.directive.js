import template from './ualMenuitem.html';
import controller from './ualMenuitem.controller';
import './ualMenuitem.scss';


class ualMenuitemDirective {
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
    //attr.$observe('disabled', newValue => $scope.isDisabled = newValue);
  }
}

export default ualMenuitemDirective;
