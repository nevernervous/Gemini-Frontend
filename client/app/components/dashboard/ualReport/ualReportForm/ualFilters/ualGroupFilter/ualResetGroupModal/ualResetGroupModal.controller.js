class UalResetGroupModalController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'ualResetGroupModal';
    this._close = close;
  }
  
  close(){
    this._close(false);
  }
}

export default UalResetGroupModalController;
