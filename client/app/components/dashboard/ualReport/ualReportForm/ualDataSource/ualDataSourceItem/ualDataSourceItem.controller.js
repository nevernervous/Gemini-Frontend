class UalDataSourceItemController {
  /*@ngInject*/
  constructor(
    $element,
    $timeout) {
    this.name = 'ualDataSourceItem';
    this.direction = 'right';
    this.class = 'ual-tooltip-right';

    // INTERNALS
    this.$element = $element;
    this.$timeout = $timeout;
  }

  //LIFECYCLE
  // $postLink() {
  //
  // }

  // TODO: Improve visualization effect
  // $( "ul li:nth-child(4n)" )
  // class: datasource-item-group-{{vm.datasourceItem.group.groupId}} 
  showMore() {
    this.direction = 'right';
    this.$timeout(
      () => {
        const wrapper = $(`#datasource-item-wrapper-${this.datasourceItem.id}`);
        const content = $(`#datasource-item-content-${this.datasourceItem.id}`);

        const id = (wrapper.width() < content.width()) ?
          '#datasource-item-wrapper-tooltip-' :
          '#datasource-item-content-tooltip-';

        const tooltip = $(`${id}${this.datasourceItem.id}`);
        const offset = tooltip.offset();
        const top = wrapper.offset().top - (tooltip.height() / 2);
        const left = wrapper.offset().left + (wrapper.width() / 2);

        if ( offset &&  top > offset.top) {
          this.direction = 'top';
        }
        this.class = `ual-tooltip-${this.direction}`;
        tooltip.removeClass('ual-tooltip-hide');
      },
      200
    )
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
