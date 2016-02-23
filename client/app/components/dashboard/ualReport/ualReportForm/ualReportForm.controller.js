class UalReportFormController {
    /*@ngInject*/
    constructor() {
        this.name = 'ualReportForm';
        this.activeTab = true;
    }

    setActiveTab() {
        this.activeTab = !this.activeTab;
    }
}

export default UalReportFormController;
