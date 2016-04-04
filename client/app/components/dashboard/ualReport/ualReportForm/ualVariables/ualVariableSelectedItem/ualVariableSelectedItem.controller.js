import $ from 'jquery';

class UalVariableSelectedItemController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualVariableSelectedItem';
    this.error = false;
  }

  isValid(order) {
    let num = _.parseInt(order);
    return ( /^\d+$/.test(order) && !_.isNaN(num) && num > 0 && num <= this.variableTotal)
  }

  onMouseover() {
    $('#' + this.variableId).find('ual-variable-selected-item').attr("draggable", true);
  }
  onMouseleave() {
    $('#' + this.variableId).find('ual-variable-selected-item').attr("draggable", false);
  }

  onBlur(event, item, order) {
    this.error = false;
    let position = _.parseInt(this.variableId.split('_')[0]);
    if ( position !== order && this.isValid(order)) {
      this.variableOrder = _.parseInt(order);
      this.cbChange.bind(this.cbBind)(item, order);
    } else {
      this.variableOrder = position;
    }
  }

  onChange(order) {
    if ( !this.isValid(order) && order != "") {
      let tooltip = $('#' + this.variableId + ' ual-tooltip');
      let offset = $('#' + this.variableId).offset();
      offset.position = 'fixed';
      offset.top -= 95;
      offset.left -= (isIE || isFirefox) ? 82 : 85;
      tooltip.css(offset);
      this.error = true;
    } else {
      this.error = false;
    }
  }

}

export default UalVariableSelectedItemController;
