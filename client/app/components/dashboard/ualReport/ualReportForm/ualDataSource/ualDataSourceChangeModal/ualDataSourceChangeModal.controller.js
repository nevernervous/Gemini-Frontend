class UalDataSourceChangeModalController {
  /*@ngInject*/
  constructor(close, oldDataSource, newDataSource) {
    this._close = close;
    this.oldDataSource = oldDataSource;
    this.newDataSource = newDataSource;
  }
  
  cancel(){
    this._close(false);
  }
  change(){
    this._close(true);
  }
}

export default UalDataSourceChangeModalController;
