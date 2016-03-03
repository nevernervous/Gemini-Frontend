import template from './ualInput.html';
import controller from './ualInput.controller';
import './ualInput.scss';

class ualInputDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.template = template;
        this.scope = {
            value : '=ngModel',
            icon: '@'
        };
    }
    
    compile(element, attr){
        let $input = element.find("input");
        $input.attr({ type: attr.type });
    }
}

export default ualInputDirective;