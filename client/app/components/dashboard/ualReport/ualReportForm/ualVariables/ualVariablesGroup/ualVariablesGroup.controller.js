import $ from 'jquery';

class UalVariablesGroupController {
    /*@ngInject*/
    constructor() {
        this.open = false;
    }

    toggle() {
        if (this.groupEnabled) {
            this.open = !this.open;
        }
    }
    needScroll() {
        if (this.finishVariableRender) {
            let $groupContainer = angular.element(document.getElementById("vgroup_" + this.groupId));
            let $itemList = $groupContainer.find("div");
            if ($itemList.length > 0) {
                return $itemList[0].clientHeight > 424;
            }
            return $itemList = $groupContainer[0].clientHeight > 424;
        }
    }

}

export default UalVariablesGroupController;
