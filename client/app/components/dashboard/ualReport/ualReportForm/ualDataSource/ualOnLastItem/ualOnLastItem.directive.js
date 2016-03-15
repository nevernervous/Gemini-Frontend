
class ualOnLastItemDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'A';
        this.controllerAs = 'vm';
    }

    link(scope, element, attrs) {
        var isLastGroup = scope.$parent.$parent.$parent.$last;
        if (scope.$last && isLastGroup) {
            let $marker = $("#overflow-marker");
            let $container = $("#content-list");
            let markerWidth = $marker.position().left;
            let containerWidth = $container.width();

            let hasHorzontalOverflow = markerWidth > containerWidth;
            
            if(hasHorzontalOverflow){
                $("#data-source-list").removeClass("-horizontal-fill");
            }
        }
    }
}

export default ualOnLastItemDirective;
