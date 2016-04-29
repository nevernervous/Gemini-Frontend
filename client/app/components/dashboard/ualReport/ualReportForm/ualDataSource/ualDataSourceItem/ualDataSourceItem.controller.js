class UalDataSourceItemController {
  /*@ngInject*/
  constructor() {

  }

  datasourceContainer(){
    let id = this.datasourceItem.id;
    let container = $("#datasourceContainer_" + id);
    let sibling = $("#datasourceItem_" + id);
    let hasEllipsis = (window.isIE) ? ((sibling.outerWidth(true) + 16) >= container.width()) : (sibling.width() > container.width());

    this.tooltipOptions = {
      left: hasEllipsis ? 2 : -4,
      right: hasEllipsis ? (window.isIE ? 3 : 4) : (window.isIE ? 10 : 15),
      top: hasEllipsis ? 2 : (window.isIE ? 2 : 5)
    }

    return (hasEllipsis) ? "datasourceContainer_" + this.datasourceItem.id : "datasourceItem_" + this.datasourceItem.id;
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
