class UalTabsController {
    /*@ngInject*/
    constructor() {
        this.tabs = [];
        this.selectedTab = 0;
    }

    addTab(tab) {
        this.tabs.push(tab);
    };

    selectTab(index) {
        this.tabs[this.selectedTab].selected = false;
        this.tabs[index].selected = true;
        this.selectedTab = index;
    };

}

export default UalTabsController;
