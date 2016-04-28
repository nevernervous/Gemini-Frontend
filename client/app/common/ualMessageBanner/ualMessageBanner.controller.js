class UalMessageBannerController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'UalMessageBanner';
    this._scope = $scope;

  }

  hideMe() {
    this.bannerClass['banner-hide']=true;
    this.bannerClass['banner-show']=false;
  }

}

export default UalMessageBannerController;
