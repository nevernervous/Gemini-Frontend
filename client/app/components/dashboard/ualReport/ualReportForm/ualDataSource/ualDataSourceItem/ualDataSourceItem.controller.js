class UalDataSourceItemController {
  /*@ngInject*/
  constructor() {
    this.tooltipTop = (window.isIE  ? 2 : 5);
  }

  datasourceContainer(){
    let container = $("#datasourceContainer_" + this.datasourceItem.id);
    let sibling = $("#datasourceItem_" + this.datasourceItem.id);
    return ( sibling.width() > container.width())
      ? "datasourceContainer_" + this.datasourceItem.id : "datasourceItem_" + this.datasourceItem.id;
  }

  hideTooltip(){
    $(".-tooltip").removeClass("-show-tooltip");
    $("[ual-tooltip-show]").prop("ual-tooltip-show", false);
  }

  showTooltip(e){
    $("#tooltip_" + this.datasourceItem.id).prop("ual-tooltip-show", true);
  }

}

export default UalDataSourceItemController;
