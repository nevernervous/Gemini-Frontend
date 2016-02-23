class UalTabContainerController {
    /*@ngInject*/
    constructor() {
        this.name = 'ualTabContainer';
        this.tabs = [];
        //  this.selectTab($attrs.active || 0);
    }

    addTab(tab) {
        console.log("add");
        if (this.tabs.length === 0) {
            this.selectTab(tab);
        }
        this.tabs.push(tab);
    };

    selectTab(tab) {
        angular.forEach(this.tabs, function(tab) {
            tab.selected = false;
        });
        tab.selected = true;
    };

}

export default UalTabContainerController;
