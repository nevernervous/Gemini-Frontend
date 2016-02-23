import template from './ualTooltip.html';
import './ualTooltip.scss';

class ualTooltipDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'E';
        this.transclude = true;
        this.template = template;
        this.scope = {};
    }

    link(scope, element) { 
      //let height =  $(element.parent()).height() + 100;
      //element.css('top', `{height}px`);
    }
}

export default ualTooltipDirective;