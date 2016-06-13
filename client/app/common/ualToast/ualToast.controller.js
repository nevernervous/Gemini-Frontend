
class UalToastController {
  /*@ngInject*/
  constructor($mdToast) {
    this.name = 'ualToast';
    this.$mdToast = $mdToast;
  }

  close() {
    this.$mdToast.hide();
  }
}

export default UalToastController;
