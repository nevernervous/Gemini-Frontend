import {onInit} from 'angular/angular';

class UalTabController {
    /*@ngInject*/
    constructor() {
        this.setValues();
    }
        
    setValues(){
        this.tabsCtrl.addTab(this);
    }
}

export default UalTabController;
