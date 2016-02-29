class UalVariablesGroupController {
    /*@ngInject*/
    constructor(DataSource, ualVariablesGroup) {
        this.name = 'ualVariablesGroup';
        this._dataSourceItem = 1;
        this._datasource = DataSource;

        this.toggle = ualVariablesGroup.toggle;

        this.groups = [];
        this._initialize();
    }

    _initialize(){
        this._datasource.groups(this._dataSourceItem)
        .then (response => this.groups = response.data);
    }

}

export default UalVariablesGroupController;
