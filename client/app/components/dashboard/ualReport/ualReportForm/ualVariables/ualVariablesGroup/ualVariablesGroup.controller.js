class UalVariablesGroupController {
    /*@ngInject*/
    constructor() {
        this.isSelected = false;
    }

    toggle(){
        this.isSelected = !this.isSelected;
        console.log(this.isSelected);
    }

}

export default UalVariablesGroupController;
