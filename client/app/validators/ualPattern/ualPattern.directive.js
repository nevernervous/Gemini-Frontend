import controller from './ualPattern.controller';

class ualPatternDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.controller = controller;
    this.require = 'ngModel';
  }

  link($scope, elem, attr, ctrl) {

    ctrl.$validators.pattern = function (viewValue) {
      const pattern = new RegExp(attr.regEx);
      if(!!viewValue){
        const splitValues=viewValue.split(",");
        return _.reduce(splitValues, function(result, item) {
          return result && !(!pattern.test(item) || item === "");
        }, true);
      }else{
        return true;
      }
    };
  }
}

export default ualPatternDirective;
