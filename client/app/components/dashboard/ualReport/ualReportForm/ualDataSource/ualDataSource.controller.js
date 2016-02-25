import _ from 'lodash';

class UalDataSourceController {
    /*@ngInject*/
    constructor(close, DataSource, selected) {
        this.name = 'ualDataSource';
        this._close = close;
        this._datasource = DataSource;
        this._selected = selected;

        this.datasources = [];
        this.datasourceGroups = [];
        this.selected = selected;
        this._initialize();
    }

    _initialize() {
        this._datasource.all()
            .then(response => {
                this.datasources = response.data
                this.datasourceGroups = _.chain(this.datasources).map("group").uniq("groupId");
            });
    }
    
    getGroupById(groupId){
        groupId = parseInt(groupId);
        return this.datasourceGroups.find({ groupId }).value();
    }
    
    isActive(itemId){
        if(!this.selected){
            return false;
        }
        
        return this.selected.id === itemId;
    }
    
    toogleSelected(item){
        this.selected = this.isActive(item.id) ? null : item;
    }


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
