import $ from 'jquery';

class ualScrollDirective {
  /*@ngInject*/
  constructor($compile) {
    this.restrict = 'A';
    this.scope = {
      ualScrollDisabled: '=',
      ualScrollOptions: '='
    };
  }

  link(scope, element, attributes) {
    let options = scope.ualScrollOptions || {};
    if (scope.ualScrollDisabled) {
      scope.$watch('ualScrollDisabled', function(ualScrollDisabled) {
        if (!ualScrollDisabled) {
          $(element).mCustomScrollbar(options);
        }
      });
    } else {
      $(element).mCustomScrollbar(options);
    }
  }
}

export default ualScrollDirective;
