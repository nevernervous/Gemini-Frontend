import template from './ualTooltip.html';
import './ualTooltip.scss';

class ualTooltipDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.transclude = true;
    this.template = template;
    this.scope = {
      ualTooltipShow: '=',
      ualTooltipOptions: '=',
      ualTooltipContainer: '='
    };
  }

  link(scope, elem, attrs) {
    if (scope.ualTooltipOptions && scope.ualTooltipContainer) {

      scope.$watch(() => elem.prop('ual-tooltip-show'),
       ualTooltipShow => {
         let action = ualTooltipShow ? 'addClass' : 'removeClass';

         if (ualTooltipShow) {
           //Cálculo de la posición
           let tooltip = $("#"+elem.attr("id"));
           let container = $("#" + scope.ualTooltipContainer);
           let offset = container.offset();
           let parent = container.closest("ual-data-source-item");

           let bigSum = (offset.left + container.width() + (tooltip.width() + 25)); //Real tooltip width = 20+5 padding, right/left
           let isLeftTooltip = (bigSum > (window.innerWidth - 15)); //15 Scroll

           if (isLeftTooltip){
             console.log(scope.ualTooltipContainer, offset.left, container.width(), container.outerWidth(), container.outerWidth(true), tooltip.width(), (tooltip.width() + 25), tooltip.outerWidth(), tooltip.outerWidth(true), bigSum, window.innerWidth);
             offset.left = offset.left - (tooltip.width() + 25);
             elem[action]('-tooltip-left');
           } else {
             offset.left = container.width() + parseInt(scope.ualTooltipOptions.left) + offset.left;
             elem[action]('-tooltip-right');
           }

           offset.top -= ((tooltip.height() / 2) - ((container.height() / 2)));
           offset.top += parseInt(scope.ualTooltipOptions.top) ? parseInt(scope.ualTooltipOptions.top) : 0;
           tooltip.css(offset);

         }

         elem[action]('-show-tooltip');

       });
    }

  }
}

export default ualTooltipDirective;
