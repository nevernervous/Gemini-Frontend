import template from './ualPattern.html';
import controller from './ualPattern.controller';
import './ualPattern.scss';


class ualPatternDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.template = template;
    this.controller = controller;
    this.require = 'ngModel';
  }

  link($scope, elem, attr, ctrl) {

    ctrl.$validators.pattern = function (viewValue) {
      let pattern = new RegExp(attr.regEx);
      if(!!viewValue){
        let splitValues=viewValue.split(",");
        let response=true;
        _.each(splitValues, (item) => {
          if(!pattern.test(item) || item === ""){
            response=false;
            return false;//break foreach
          }
        });
        return response;
      }else{
        return true;
      }
    };
  }
}

export default ualPatternDirective;
