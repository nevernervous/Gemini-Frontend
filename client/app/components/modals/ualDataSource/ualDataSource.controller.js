class UalDataSourceController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'ualDataSource';
    this._close = close;
  }
  
  close(){
    this._close(false);
  }
}

export default UalDataSourceController;
