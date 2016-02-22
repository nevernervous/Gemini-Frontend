class ReportController {
    /*@ngInject*/
    constructor(ualDataSource) {
        this.name = 'report';
        this._dataSource = ualDataSource;
    }

    openDataSourceModal() {
        this._dataSource.open();
    }
}

export default ReportController;
