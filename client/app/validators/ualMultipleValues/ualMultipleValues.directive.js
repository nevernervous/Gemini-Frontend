import controller from './ualMultipleValues.controller';

class ualMultipleValuesDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.controller = controller;
    this.require = 'ngModel';
  }

  link($scope, elem, attr, ctrl) {
    ctrl.$validators.acceptCommas = function (viewValue) {
      const patternCommas = new RegExp(",");
      if(!!viewValue && attr.acceptCommas !== "true"){
        return !patternCommas.test(viewValue);
      }
      return true;
    };
  }
}

export default ualMultipleValuesDirective;
