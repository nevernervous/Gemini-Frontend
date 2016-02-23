class UalDataSourceItemController {
  /*@ngInject*/
  constructor() {
      this.filteredElements = [];
  }
  hasElements(){
      return !!this.filteredElements &&  this.filteredElements.length > 0;
  }
  
  isActive(){
      let activeDataSource = this.dataSourceListCtrl.getActive();
      if(!activeDataSource){
         return false; 
      }
      return activeDataSource.id === this.sourceItem.id;
  }
  activate(){
      this.dataSourceListCtrl.setActive(this.sourceItem);
  }
  
}

export default UalDataSourceItemController;
