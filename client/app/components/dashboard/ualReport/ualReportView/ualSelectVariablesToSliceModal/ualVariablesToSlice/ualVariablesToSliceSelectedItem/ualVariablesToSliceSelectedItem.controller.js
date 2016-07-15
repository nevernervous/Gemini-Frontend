import $ from 'jquery';

class UalVariablesToSliceSelectedItemController {
  /*@ngInject*/
  constructor(
    //INTERNALS
    $scope,
    $timeout,
    //COMPONENTS
    ualPopover) {
    this.name = 'ualVariablesToSliceSelectedItem';

    // INTERNALS
    this.$scope = $scope;
    this.$timeout = $timeout;

    // COMPONENTS
    this.components = {
      popover: ualPopover
    }

    // STATE
    this.error = false;
    this.position = {};
    this.identifier = null;
  }

  $onInit() {
    // RESET
    this.identifier = this.variableOrder + "_item-order-" + this.variableType;
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
    $('#' + this.identifier ).closest('ual-variables-to-slice-selected-item').attr("draggable", true);
  }
  onMouseleave() {
    $('#' + this.identifier ).closest('ual-variables-to-slice-selected-item').attr("draggable", false);
  }

  onBlur() {
    if ( this.position.old != this.position.new && this.isValid(this.position.new)) {
      this.variableChange({
        oldOrder: this.position.old - 1,
        newOrder: this.position.new - 1
      });
    } else {
      this.position.new = this.position.old;
      this.error = false;
      this.components.popover.close(this.identifier);
    }
  }

  onChange() {
    const adjustment = {
      top: $('.content-dashboard').scrollTop()
    };

    this.error = ( !this.isValid(this.position.new) && this.position.new != "");
    this.error ?
      this.components.popover.open(this.identifier, adjustment, 'top') :
      this.components.popover.closeAll();
  }

}

export default UalVariablesToSliceSelectedItemController;
