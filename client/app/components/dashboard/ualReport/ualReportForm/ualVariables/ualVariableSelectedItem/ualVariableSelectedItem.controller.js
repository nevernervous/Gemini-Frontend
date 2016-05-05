import $ from 'jquery';

class UalVariableSelectedItemController {
  /*@ngInject*/
  constructor(ualTooltipService) {
    this.name = 'ualVariableSelectedItem';
    this.error = false;
    this._ualTooltipService=ualTooltipService;
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

  onChange(order,id) {
    this._ualTooltipService.hide();
    if ( !this.isValid(order) && order != "") {
      let container = id+"_variable-order";
      console.log(container);
      this._ualTooltipService.show({
        container:container,
        text:`Only numeric values between 1 and ${this.variableTotal} are allowed. Please re-enter a valid value.`,
        position:"top",
        type:"error"
      });

    }
  }

}

export default UalVariableSelectedItemController;
