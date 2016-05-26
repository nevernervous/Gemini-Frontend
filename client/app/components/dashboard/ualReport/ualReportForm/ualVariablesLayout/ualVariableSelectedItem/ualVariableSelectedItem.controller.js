import $ from 'jquery';

class UalVariableSelectedItemController {
  /*@ngInject*/
  constructor(ualTooltipService) {
    this.name = 'ualVariableSelectedItem';
    this._ualTooltipService=ualTooltipService;
  }

  isValid(order) {
    let num = _.parseInt(order);
    return ( /^\d+$/.test(order) && !_.isNaN(num) && num > 0 && num <= this.variableTotal)
  }

  onMouseover() {
    $('#' + this.variableId+"_selected_container").find('ual-variable-selected-item').attr("draggable", true);
  }
  onMouseleave() {
    $('#' + this.variableId+"_selected_container").find('ual-variable-selected-item').attr("draggable", false);
  }

  onBlur(event, item, order) {
    let position = _.parseInt(isNaN(this.variableId.split('_')[1])?this.variableId.split('_')[0]:this.variableId.split('_')[1]);
    if ( position !== order && this.isValid(order)) {
      this.variableOrder = _.parseInt(order);
      this.cbChange.bind(this.cbBind)(item, order);
    } else {
      this.variableOrder = position;
    }
    this._ualTooltipService.hide();
  }

  onChange(order,id) {
    if ( !this.isValid(order) && order != "") {
      let container = this.prefix+id+"_variable-order";
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
