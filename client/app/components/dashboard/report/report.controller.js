class ReportController {
    /*@ngInject*/
    constructor(ualDataSource) {
        this.name = 'report';
        this._dataSource = ualDataSource;
    }

    openFullModal() {
        this._dataSource.open();
    }
}

export default ReportController;
