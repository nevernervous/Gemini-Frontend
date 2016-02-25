class UalDataSourceItemController {
  /*@ngInject*/
  constructor() {
  }
  
  isActive(currentDataSource){
      if(!this.datasourceActive){
         return false; 
      }
      return this.datasourceActive.id === currentDataSource.id;
  }
  activate(selectedDataSource){
      this.datasourceActive = selectedDataSource;
  }
  
}

export default UalDataSourceItemController;
