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
           let wrapperWidth = container.width();

           let isLeftTooltip = ((offset.left + container.width() + tooltip.width()) > window.innerWidth - 15);

           if (isLeftTooltip){
             let leftAction = ualTooltipShow ? 'addClass' : 'removeClass';
             elem[leftAction]('-tooltip-left');
             console.log(offset.left, container.width(), tooltip.width());
             offset.left = offset.left - tooltip.width() - 35; //O algún número
           } else {
             offset.left = wrapperWidth + parseInt(scope.ualTooltipOptions.left) + offset.left;
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
