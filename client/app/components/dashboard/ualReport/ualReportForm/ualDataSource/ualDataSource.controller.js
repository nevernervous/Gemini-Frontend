class UalDataSourceController {
    /*@ngInject*/
    constructor(close, DataSource, selected) {
        this.name = 'ualDataSource';
        this._close = close;
        this._datasource = DataSource;
        this._selected = selected;

        this.datasources = [];
        this.selected = selected;
        this._initialize();
    }

    _initialize() {
        this._datasource.all()
            .then(response => this.datasources = this.createDataSourceList(response.data));
    }

    createDataSourceList(dataSources) {
        return _.chain(dataSources)
            .groupBy((item) => {
                return item.group.groupId;
            })
            .pairs()
            .map((currentItem) => {
                var group = _.object(_.zip(["groupId", "groupElements"], currentItem));

                group.groupName = _.chain(group.groupElements).map("group.groupName").first().value();
                group.groupElements = _.map(group.groupElements, (item) => {
                    return _.omit(item, ["group"])
                });

                return group;
            })
            .value();

    };


    close() {
        this._close(false);
    }

    apply() {
        this._close(this.selected);
    }
    cancel() {
        this._close(this._selected);
    }
}

export default UalDataSourceController;
