class UalDataSourceItemController {
  /*@ngInject*/
  constructor(ualTooltipService) {
    this._ualTooltipService=ualTooltipService;

  }

  datasourceContainer(){
    let id = this.datasourceItem.id;
    let container = $("#datasourceContainer_" + id);
    let sibling = $("#datasourceItem_" + id);
    let hasEllipsis = (window.isIE) ? ((sibling.outerWidth(true) + 16) >= container.width()) : (sibling.width() > container.width());

    return (hasEllipsis) ? "datasourceContainer_" + this.datasourceItem.id : "datasourceItem_" + this.datasourceItem.id;
  }

  hideTooltip(){
    this._ualTooltipService.hide();
  }

  showTooltip(){
    this._ualTooltipService.show({
      container:this.datasourceContainer(),
      text:this.datasourceItem.description,
      position:"left",
    })
  }

}

export default UalDataSourceItemController;
