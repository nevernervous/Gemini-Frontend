import template from './ualButton.html';
import './ualButton.scss';

class ualButtonDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.transclude = true;
        this.template = template;
        this.scope = {};
    }

    link(scope, element) {
      scope.$watch(
        () => element.attr('disabled'), 
        newValue => { 
          let action = newValue ? 'addClass' : 'removeClass';
          element[action]('-disabled');
        }
      );
    }
}

export default ualButtonDirective;