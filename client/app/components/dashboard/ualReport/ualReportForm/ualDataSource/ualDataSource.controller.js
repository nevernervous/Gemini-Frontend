class UalDataSourceController {
    /*@ngInject*/
    constructor(close, DataSource, lodash) {
        this.name = 'ualDataSource';
        this._close = close;
        this._dataSourceService = DataSource;
        this.datasourceList = [];
        this.datasourceActive = undefined;
        this.lodash = lodash;
        
        //TODO Why this method is not invoked automatically
        this.$onInit();
    }

    $onInit() {
        this._dataSourceService.all().then((reply) => {
            this.createDataSourceList(reply.data);
        });
    }

    createDataSourceList(dataSources) {
        this.datasourceList = this.lodash.chain(dataSources)
                                  .groupBy((item)=> {
                                        return item.group.groupId;
                                  })
                                  .pairs()
                                  .map((currentItem) => {
                                      var group = _.object(_.zip(["groupId", "groupElements"], currentItem));
                                      
                                      group.groupName = _.chain(group.groupElements).map("group.groupName").first().value();
                                      group.groupElements = _.map(group.groupElements, (item) => {
                                          return _.omit(item, ["group"])
                                      });
                                      
                                      return group;
                                  })
                                  .value();
                                 
        
    };


    close() {
        this._close(false);
    }
    
    getActiveDataSource(){
        return this.datasourceActive;
    }


}

export default UalDataSourceController;
