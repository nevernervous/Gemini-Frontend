import controller from './ualResize.controller';

class ualResizeDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'A';
        this.scope = {
            onResize: "&"
        };
        // this.controller = controller;
        this.controllerAs = 'vm';
        
    }
    link(scope, elem, attrs) {
        var viewPort = angular.element(elem);
        scope.$watch(function() {
            return {
                'h': viewPort[0].clientHeight,
                'w': viewPort[0].clientWidth
            };
        }, function(newValue, oldValue) {
            if (scope.onResize) {
                scope.onResize(newValue);
            }

        }, true);

        viewPort.bind('resize', function() {
            scope.$apply();
        });
    }

}

export default ualResizeDirective;
