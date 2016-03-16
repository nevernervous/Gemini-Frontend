import $ from 'jquery';

class ualScrollDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.scope = {};
  }

  link(scope, element, attributes) {
    console.log('ualScrollDirective');
    console.log(element);
    $(element).mCustomScrollbar({theme: "dark"});
  }
}

export default ualScrollDirective;
