import template from './ualTooltip.html';
import './ualTooltip.scss';

class ualTooltipDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.transclude = true;
    this.template = template;
    this.scope = {
      ualTooltipShow: '<',
      ualTooltipOptions: '<',
      ualTooltipContainer: '<'
    };
  }

  link(scope, elem, attrs) {
    if (scope.ualTooltipOptions && scope.ualTooltipContainer) {

      scope.$watch(() => elem.prop('ual-tooltip-show'),
       ualTooltipShow => {
         let action = ualTooltipShow ? 'addClass' : 'removeClass';

         let tooltip = $("#"+elem.attr("id"));
         let container = $("#" + scope.ualTooltipContainer);
         let offset = container.offset();
         elem['removeClass']('-tooltip-left');
         elem['removeClass']('-tooltip-right');

         if (ualTooltipShow) {
           //Cálculo de la posición
           let isLeftTooltip = ((offset.left + container.outerWidth(true) + tooltip.outerWidth(true)) > window.innerWidth);

           if (isLeftTooltip){
             offset.left = offset.left + (parseInt(scope.ualTooltipOptions.left) ? parseInt(scope.ualTooltipOptions.left) : 0) - tooltip.outerWidth(true);
             elem[action]('-tooltip-left');
           } else {
             offset.left =  offset.left + container.outerWidth(true) + (parseInt(scope.ualTooltipOptions.right) ? parseInt(scope.ualTooltipOptions.right) : 0);
             elem[action]('-tooltip-right');
           }

           offset.top -= ((tooltip.height() / 2) - ((container.height() / 2)));
           offset.top += parseInt(scope.ualTooltipOptions.top) ? parseInt(scope.ualTooltipOptions.top) : 0;
         }
         else {
           offset.left = 0;
           offset.top = 0;
         }

         tooltip.css(offset);
         elem[action]('-show-tooltip');

       });
    }

  }
}

export default ualTooltipDirective;
