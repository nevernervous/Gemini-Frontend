class ModalController {
  /*@ngInject*/
  constructor(modal) {
    this.name = 'modal';
    this._modal = modal;
  }
  close(){
    this._modal.close();
  }
}

export default ModalController;
