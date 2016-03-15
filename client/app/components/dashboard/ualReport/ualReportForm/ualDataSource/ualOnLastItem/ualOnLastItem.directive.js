
class ualOnLastItemDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'A';
        this.controllerAs = 'vm';
    }

    link(scope, element, attrs) {
        var isLastGroup = scope.$parent.$parent.$parent.$last;
        if (scope.$last && isLastGroup) {
            scope.vm.checkOverflow();
        }
    }
}

export default ualOnLastItemDirective;
