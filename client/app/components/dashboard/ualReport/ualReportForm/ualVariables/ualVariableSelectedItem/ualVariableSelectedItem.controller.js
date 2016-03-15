class UalVariableSelectedItemController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualVariableSelectedItem';
    this.order = this.variableOrder;
  }

  onBlur(item, order) {
    if ( this.order !== order ) {
      this.order = order;
      this.cbChange.bind(this.cbBind)(item, order);
    }
  }
}

export default UalVariableSelectedItemController;
