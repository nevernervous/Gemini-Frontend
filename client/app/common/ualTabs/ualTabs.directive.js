import template from './ualTabs.html';
import controller from './ualTabs.controller';
import './ualTabs.scss';

class ualTabsDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'E';
        this.transclude = true;
        this.template = template;
        this.scope = {};
        this.controller = controller;
        this.controllerAs = 'vm';
    }
    
    link(scope, element, attrs, ctrl) {
        // set the first tab to show first
        ctrl.selectTab(attrs.active || 0);
    }

}

export default ualTabsDirective;
