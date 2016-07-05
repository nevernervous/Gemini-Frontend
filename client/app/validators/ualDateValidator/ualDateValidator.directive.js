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
    ctrl.$validators.dateValue = function (modelValue, viewValue) {
      if(!!viewValue && attr.datatype === "Date"){
        let dateArray=viewValue.split("/");
        let tempDate = new Date(dateArray[2], --dateArray[0], dateArray[1]);
        return dateArray[0] === tempDate.getMonth();
      }
      return true;
    };
  }
}

export default ualDateValidatorDirective;
