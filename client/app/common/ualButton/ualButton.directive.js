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
        newValue => console.log('change')//element.css('-disabled')
      );
    }
}

export default ualButtonDirective;