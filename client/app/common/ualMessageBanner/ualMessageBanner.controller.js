class UalMessageBannerController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'UalMessageBanner';
    this._scope = $scope;

  }

  hideMe() {
    this._scope.$emit('BANNER.HIDE');
  }

}

export default UalMessageBannerController;
