import template from './<%= name %>.html';
import './<%= name %>.scss';

class <%= name %>Directive {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {};
  }

  link(scope, element) {

  }
}

export default <%= name %>Directive;
