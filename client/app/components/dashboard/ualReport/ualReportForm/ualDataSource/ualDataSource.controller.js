class UalDataSourceController {
  /*@ngInject*/
  constructor(close, DataSource, selected, ualDataSourceChangeModal, $filter) {
    this._close = close;
    this._datasource = DataSource;
    this._changemodal = ualDataSourceChangeModal;
    this._selected = selected;
    this._filter = $filter;
    this.searchTerm = {};

    this.datasources;
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

  shouldShow(group) {
    return this._filter("filter")(group.items, this.searchTerm).length > 0;
  }

  isActive(itemId) {
    return (this.selected) && this.selected.id === itemId;
  }

  toogleSelected(item) {
    this.selected = this.isActive(item.id) ? null : item;
  }

  _initialize() {
    this._datasource.all('group')
      .then(response => this.datasources = response.data);
  }
}

export default UalDataSourceController;
