import $ from 'jquery';

class UalVariableSelectedItemController {
  /*@ngInject*/
  constructor(ualTooltipService) {
    this.name = 'ualVariableSelectedItem';
    this._ualTooltipService=ualTooltipService;

    this.variableId = this.variableOrder;
  }

  isValid(order) {
    let num = _.parseInt(order);
    return ( /^\d+$/.test(order) && !_.isNaN(num) && num > 0 && num <= this.variableTotal)
  }

  onMouseover() {
    $('#' + this.variableOrder+"_selected_container-" + this.variableType ).find('ual-variable-selected-item').attr("draggable", true);
  }
  onMouseleave() {
    $('#' + this.variableOrder+"_selected_container-" + this.variableType ).find('ual-variable-selected-item').attr("draggable", false);
  }

  onBlur(event, item, order) {
    let position = this.variableId;
    if ( position !== order && this.isValid(order)) {
      this.variableOrder = _.parseInt(order);
      this.cbChange(item, order);
    } else {
      this.variableOrder = position;
    }
    this._ualTooltipService.hide();
  }

  onChange(order,id) {
    if ( !this.isValid(order) && order != "") {
      let container = this.variableId+"_variable-order-"+this.variableType;
      this._ualTooltipService.show({
        container:container,
        text:`Only numeric values between 1 and ${this.variableTotal} are allowed. Please re-enter a valid value.`,
        position:"top",
        type:"error"
      });
    }else{
      this._ualTooltipService.hide();
    }
  }

}

export default UalVariableSelectedItemController;
