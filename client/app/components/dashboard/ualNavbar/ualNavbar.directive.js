import template from './ualNavbar.html';
import controller from './ualNavbar.controller';
import './ualNavbar.scss';

class ualNavbarDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.template = template;
    this.controller = controller;
    this.controllerAs = 'vm';
  }

}

export default ualNavbarDirective;
