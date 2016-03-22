class UalDataSourceItemController {
  /*@ngInject*/
  constructor() {
  }
  
  hideTooltip(){
    $(".-show-tooltip").removeClass("-show-tooltip").addClass("-hide-tooltip");
  }
  
}

export default UalDataSourceItemController;