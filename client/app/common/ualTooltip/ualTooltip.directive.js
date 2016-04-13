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

    link(scope, element, attrs, ctrl) {
      scope.$watch(
        () => element.prop('disabled'),
        isDisabled => {
              let action = !isDisabled ? 'addClass' : 'removeClass';
              element[action]('-show-tooltip');
        }
      );
    }
}

export default ualTooltipDirective;