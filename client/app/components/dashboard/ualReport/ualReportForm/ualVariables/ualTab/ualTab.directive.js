import template from './ualTab.html';
import controller from './ualTab.controller';
import './ualTab.scss';

class ualTabDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'E';
        this.transclude = true;
        this.template = template;
        this.scope =  {
            label: '@'
        };
        this.require = '^ualTabs';
        this.controllerAs = 'vm';
    }

    link(scope, $element, $attrs, $ctrl) {
        scope.tab = {
            label: scope.label,
            selected: false
        };
        $ctrl.addTab(scope.tab);
    }
}

export default ualTabDirective;
