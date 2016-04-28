class UalMessageBannerController {
  /*@ngInject*/
  constructor($scope,$timeout) {
    this.name = 'UalMessageBanner';
    this._scope = $scope;
    this._timeout=$timeout;
  }

  hideMe() {
    this.bannerClass['banner-hide']=true;
    this.bannerClass['banner-show']=false;
    let tmp=this;
    tmp._timeout(function() {
      tmp.bannerClass={};
    }, 500);//500ms(slideOutUp)
  }

}

export default UalMessageBannerController;
