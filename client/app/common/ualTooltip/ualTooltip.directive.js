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
           ualTooltipOptions: '='
        };
    }

    link(scope, elem, attrs) {
        
      if (scope.ualTooltipOptions) { 
           
       scope.$watch(() => elem.prop('ual-tooltip-show'),
        ualTooltipShow => {
          let action = ualTooltipShow ? 'addClass' : 'removeClass';
          
          if (ualTooltipShow) {
            //Cálculo de la posición
            let tooltip = $("#"+elem.attr("id"));
            let wrapper = tooltip.closest(".tooltip-wrapper");
            let offset = wrapper.offset();
            let wrapperWidth = wrapper.width();
            let siblingWidth = tooltip.siblings(".tooltip-sibling").width();
            
            wrapperWidth = wrapperWidth + (parseInt(scope.ualTooltipOptions.wrapperWidth) ? parseInt(scope.ualTooltipOptions.wrapperWidth) : 0);
            siblingWidth = siblingWidth + (parseInt(scope.ualTooltipOptions.siblingWidth) ? parseInt(scope.ualTooltipOptions.siblingWidth) : 0);
        
            offset.left = (siblingWidth > wrapperWidth ?  wrapperWidth : siblingWidth) + offset.left;
            offset.top -= ((tooltip.height() / 2) - ((wrapper.height() / 2)));
            offset.top += parseInt(scope.ualTooltipOptions.top) ? parseInt(scope.ualTooltipOptions.top) : 0;
            tooltip.css(offset);
          }

          elem[action]('-show-tooltip');
          
         });     
      }    
       
    }
}

export default ualTooltipDirective;