class UalDataSourceController {
  /*@ngInject*/
  constructor(close, DataSource, selected, ualDataSourceChangeModal, $filter) {
    this._close = close;
    this._datasource = DataSource;
    this._changemodal = ualDataSourceChangeModal;
    this._selected = selected;
    this._filter = $filter;
    this.searchTerm = {};

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

  shouldShow(group){
      return this._filter("filter")(group, this.searchTerm).length > 0;
  }

  getGroupById(groupId) {
    groupId = parseInt(groupId);
    return this.datasourceGroups.find({ groupId }).value();
  }

  orderGroups(item) {
    return _.chain(item).map('group.order').first().value();
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
      .then(response => {
        let datasources = response.data;

        datasources = this._filter("groupBy")(datasources, 'group.groupId');
        datasources = this._filter('toArray')(datasources, 'true');
        datasources = this._filter('orderBy')(datasources, this.orderGroups);

        this.datasources = datasources;
        this.datasourceGroups = _.chain(response.data).map("group").uniq("groupId");
      });
  }
}

export default UalDataSourceController;
