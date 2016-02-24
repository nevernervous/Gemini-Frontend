class UalTabController {
    /*@ngInject*/
    constructor() {
        //console.log("child tab");
        //this.setValues(this);
    }
        
    setValues(tab){
        this.ualTabs.add(tab);
    }

    $onInit(){
        //this.tabs.add(tab);
    }
}

export default UalTabController;
