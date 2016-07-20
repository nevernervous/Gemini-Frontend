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
    $scope.nav = (url) => {
      ctrl.components.sidenav.toggle();
      ctrl.$state.go(url);
    }
  }
}

export default ualSidenavDirective;
