class UalDataSourceItemController {
  /*@ngInject*/
  constructor() {

  }

  datasourceHasEllipsis(){
    let container = $("#datasourceContainer_" + this.datasourceItem.id);
    let sibling = $("#datasourceItem_" + this.datasourceItem.id);
    return (window.isIE) ? (((sibling.outerWidth(true) * 100.0) / container.width()) > 95) : (sibling.width() > container.width());
  }

  datasourceContainer(){
    return (this.datasourceHasEllipsis()) ? "datasourceContainer_" + this.datasourceItem.id : "datasourceItem_" + this.datasourceItem.id;
  }

  datasourceOffsetLeft(){
    return (this.datasourceHasEllipsis()) ? 2 : -4;
  }

  datasourceOffsetRight(){
    return (this.datasourceHasEllipsis()) ? 0 : 10;
  }

  datasourceOffsetTop(){
    return (window.isIE ? 2 : 5);
  }

  hideTooltip(){
    $(".-tooltip").removeClass("-show-tooltip");
    $("[ual-tooltip-show]").prop("ual-tooltip-show", false);
  }

  showTooltip(){
    $("#tooltip_" + this.datasourceItem.id).prop("ual-tooltip-show", true);
  }

}

export default UalDataSourceItemController;
