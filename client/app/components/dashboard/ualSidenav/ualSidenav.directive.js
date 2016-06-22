import template from './ualSidenav.html';
import controller from './ualSidenav.controller';
import './ualSidenav.scss';


class ualSidenavDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.template = template;
    this.controller = controller;
  }

  link($scope, elem, attr, ctrl) {
    $scope.nav = ctrl.$state.go;
  }
}

export default ualSidenavDirective;
