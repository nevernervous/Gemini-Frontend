import _ from 'lodash';

class UalDataSourceController {
    /*@ngInject*/
    constructor(close, DataSource, selected, ualDataSourceChangeModal) {
        this._close = close;
        this._datasource = DataSource;
        this._changemodal = ualDataSourceChangeModal;
        this._selected = selected;

        this.datasources = [];
        this.datasourceGroups = [];
        this.selected = selected;
        this._initialize();
    }

    apply() {
        if (this._selected && (this._selected !== this.selected)) {
            this._changemodal.open({ oldDataSource: this._selected, newDataSource: this.selected })
                .then(response => response && this._close(this.selected));
        } else {
            this._close(this.selected);
        }

    }
    cancel() {
        this._close(this._selected);
    }

    getGroupById(groupId) {
        groupId = parseInt(groupId);
        return this.datasourceGroups.find({ groupId }).value();
    }

    isActive(itemId) {
        if (!this.selected) {
            return false;
        }

        return this.selected.id === itemId;
    }

    toogleSelected(item) {
        this.selected = this.isActive(item.id) ? null : item;
    }

    _initialize() {
        this._datasource.all()
            .then(response => this.datasources = response.data);
    }
}

export default UalDataSourceController;
