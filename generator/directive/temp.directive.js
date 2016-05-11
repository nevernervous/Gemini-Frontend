import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';


class <%= name %>Directive {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.controller = controller;
  }

  link($scope, elem, attr, ctrl) {

  }
}

export default <%= name %>Directive;
