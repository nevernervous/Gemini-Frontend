import template from './ualTab.html';
import controller from './ualTab.controller'
import './ualTab.scss';

class ualTabDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'E';
        this.scope = {};
        this.transclude = true;
        this.template = template;
        this.require = '^ualTabs';
        this.controllerAs = 'vm';
        this.controller = controller;
        this.bindings = {
            title: '@',
            selected: '@'
        };
    }

    link(scope, element, attrs, ctrl) {
        scope.tab = {
            title: attrs.title,
            selected: false
        };

        ctrl.addTab(scope.tab);
    }
}

export default ualTabDirective;
