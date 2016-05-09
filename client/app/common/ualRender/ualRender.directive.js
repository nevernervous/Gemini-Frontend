// http://stackoverflow.com/questions/15207788/calling-a-function-when-ng-repeat-has-finished
class ualRenderDirective {
    /*@ngInject*/
    constructor($timeout) {
        this.restrict = 'A';
        this.controllerAs = 'vm';
    }

    link(scope, element, attr) {
      if (scope.$last === true) {
        scope.$emit('RENDER.END', attr.id);
      }
    }
}

export default ualRenderDirective;
