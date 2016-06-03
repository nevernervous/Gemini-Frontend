import $ from 'jquery';

class UalVariableSelectedItemController {
  /*@ngInject*/
  constructor($scope, ualTooltipService) {
    this.name = 'ualVariableSelectedItem';
    this._ualTooltipService=ualTooltipService;
    this.$scope = $scope;

    // STATE
    this.position = {};
    this.identifier = null;
  }

  $onInit() {
    // RESET
    this.$scope.$watch((scope) => {
      return scope.vm.variableOrder
    }, (newValue, oldValue) => {
      this.position = {
        old: this.variableOrder + 1,
        new: this.variableOrder + 1
      }
      this.identifier = this.variableOrder + "_item-order-" + this.variableType;
    });
  }

  isValid(order) {
    const num = _.parseInt(order);
    return ( /^\d+$/.test(order) && !_.isNaN(num) && num > 0 && num <= this.variableTotal)
  }

  onMouseover() {
    $('#' + this.identifier ).find('ual-variable-selected-item').attr("draggable", true);
  }
  onMouseleave() {
    $('#' + this.identifier ).find('ual-variable-selected-item').attr("draggable", false);
  }

  onBlur() {
    if ( this.position.old != this.position.new && this.isValid(this.position.new)) {
      this.variableChange({
        item: this.variableItem,
        oldOrder: this.position.old - 1,
        newOrder: this.position.new - 1
      });
    } else {
      this.position.new = this.position.old;
      this._ualTooltipService.hide();
    }
  }

  onChange() {
    if ( !this.isValid(this.position.new) && this.position.new != "") {
      this._ualTooltipService.show({
        container: this.identifier,
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
