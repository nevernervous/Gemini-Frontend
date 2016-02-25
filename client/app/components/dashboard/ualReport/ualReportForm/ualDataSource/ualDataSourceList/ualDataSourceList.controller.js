class UalDataSourceListController {
    /*@ngInject*/
    constructor() {
        this.name = 'ualDataSourceList';
    }
    
    setActive(dataSource){
        this.dataSourceActive = dataSource;
    }
    
    getActive(){
        return this.dataSourceActive;
    }
}

export default UalDataSourceListController;
