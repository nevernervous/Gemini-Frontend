import template from './ualMultipleValues.html';
import controller from './ualMultipleValues.controller';
import './ualMultipleValues.scss';


class ualMultipleValuesDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.template = template;
    this.controller = controller;
    this.require = 'ngModel';
  }

  link($scope, elem, attr, ctrl) {
    ctrl.$validators.acceptCommas = function (viewValue) {
      let patternCommas = new RegExp(",");
      if(!!viewValue && attr.acceptCommas !== "true"){
        return !patternCommas.test(viewValue);
      }
      return true;
    };
  }
}

export default ualMultipleValuesDirective;
