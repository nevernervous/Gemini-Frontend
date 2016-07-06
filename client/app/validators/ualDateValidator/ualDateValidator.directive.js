import template from './ualDateValidator.html';
import controller from './ualDateValidator.controller';
import './ualDateValidator.scss';


class ualDateValidatorDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.template = template;
    this.controller = controller;
    this.require = 'ngModel';
  }

  link($scope, elem, attr, ctrl) {
    ctrl.$validators.value = function (modelValue, viewValue) {
      if(!!attr.pattern && !!viewValue){
        let pattern = new RegExp(attr.pattern);
        let valid=pattern.test(viewValue);
        if(!valid){
          return false
        }
        let dateArray=viewValue.split("/");
        let tempDate = new Date(dateArray[2], --dateArray[0], dateArray[1]);
        return dateArray[0] === tempDate.getMonth();
      }
    };
  }
}

export default ualDateValidatorDirective;
