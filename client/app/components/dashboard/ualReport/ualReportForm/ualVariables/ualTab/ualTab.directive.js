import template from './ualTab.html';
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
        this.bindings = {
            title: '@',
            selected: '@',
            isEnabled: '@'
        };
    }

  link(scope, element, attrs, ctrl) {
        scope.tab = {
            title: attrs.title,
            selected: false,
            isEnabled: attrs.isEnabled
        };

        ctrl.addTab(scope.tab);
    }
}

export default ualTabDirective;
