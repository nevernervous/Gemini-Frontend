class UalDataSourceItemController {
  /*@ngInject*/
  constructor(
    $element,
    $timeout) {
    this.name = 'ualDataSourceItem';
    this.hasTooltip = {
      wrapper: false,
      content: false
    }

    // INTERNALS
    this.$element = $element;
    this.$timeout = $timeout;
  }

  // LiFECYCLE
  $postLink() {
    const wrapper = $(this.$element).find('.datasource-item-wrapper');
    const content = wrapper.find('.datasource-item-content');
    console.log('wrapper: ' + wrapper.width());
    console.log('content: ' + content.width());
    this.isTruncated = wrapper.width() < content.width();
  }

  showMore(type) {
    if ( !this.hasTooltip[type] ) {
      this.hasTooltip[type] = true;

      this.$timeout(
        () => {
          const tooltip = this.isTruncated ? 'datasource-item-content' : 'datasource-item-wrapper';
          $(`#${tooltip}-${this.datasourceItem.id}`).removeClass('ual-tooltip-hide');
        },
        200
      )
    }
  }

  showTooltip(container, data, position = 'right') {

    let hasEllipsis = $("#"+container).hasClass("is-truncated");
    // this._ualTooltipService.show({
    //   container: container,
    //   text: "<span class='title'>Last updated date " + this._filter('date')(data.refreshDate, 'MM/dd/yy HH:mm', '-0500') + " CT</span>" + (hasEllipsis ?  "<br />" + data.name : "") + "<br />" + data.description,
    //   position: position
    // });
  }

  hideTooltip() {
    //this._ualTooltipService.hide();
  }

}

export default UalDataSourceItemController;
