class UalDataSourceItemController {
  /*@ngInject*/
  constructor() {
    this.tooltipTop = (window.isIE  ? 2 : 5);
  }
  
  hideTooltip(){
    $(".-show-tooltip").removeClass("-show-tooltip").addClass("-hide-tooltip");
  }
  
}

export default UalDataSourceItemController;