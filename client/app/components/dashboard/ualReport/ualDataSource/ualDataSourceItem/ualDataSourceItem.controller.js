class UalDataSourceItemController {
  /*@ngInject*/
  constructor() {
      this.filteredElements = [];
  }
  hasElements(){
      return !!this.filteredElements &&  this.filteredElements.length > 0;
  }
  
}

export default UalDataSourceItemController;
