import controller from './ualDateValidator.controller';

class ualDateValidatorDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.controller = controller;
    this.require = 'ngModel';
  }

  link($scope, elem, attr, ctrl) {
    ctrl.$validators.dateValue = function (viewValue) {
      if (!!viewValue && attr.datatype === "Date") {
        let dateArray = viewValue.split("/");
        let tempDate = new Date(dateArray[2], --dateArray[0], dateArray[1]);
        return dateArray[0] === tempDate.getMonth();
      }
      return true;
    };

    let validSecondValue = (viewValue) => {
      let validity = true;
      if (!!viewValue && attr.datatype === "Date" && attr.secondDate) {
        let firstDate = viewValue,
          secondDate = attr.secondDate;
        let firstDateArray = firstDate.split("/");
        let secondDateArray = secondDate.split("/");
        let tempFirstDate = new Date(firstDateArray[2], --firstDateArray[0], firstDateArray[1]);
        let tempSecondDate = new Date(secondDateArray[2], --secondDateArray[0], secondDateArray[1]);
        validity = tempSecondDate >= tempFirstDate;
      }
      ctrl.$setValidity('secondDate', validity);
      return viewValue;
    };

    ctrl.$parsers.unshift(validSecondValue);
    ctrl.$formatters.push(validSecondValue);

    attr.$observe("secondDate", function () {
      return validSecondValue(ctrl.$viewValue);
    });
  }
}

export default ualDateValidatorDirective;
