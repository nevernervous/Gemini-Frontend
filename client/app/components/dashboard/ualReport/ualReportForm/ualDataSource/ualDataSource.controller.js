class UalDataSourceController {
  /*@ngInject*/
  constructor(close, DataSource, selected, ualDataSourceChangeModal, ualDataSourceCancelModal, $filter) {
    this._close = close;
    this._datasource = DataSource;
    this._cancelmodal = ualDataSourceCancelModal;
    this._changemodal = ualDataSourceChangeModal;
    this._selected = selected;
    this._filter = $filter;
    this.searchTerm = {};

    this.datasources;
    this.selected = selected;
    this._initialize();
  }

  apply() {
    if (this._selected && this.hasChange()) { // FIRST TIME
      this._changemodal.open({ oldDataSource: this._selected, newDataSource: this.selected })
        .then(response => response && this._close(this.selected));
    } else {
      this._close(this.selected);
    }

  }
  cancel() {
    if ( this.hasChange() ) {
      this._cancelmodal.open()
        .then(response => response && this._close(this._selected) );
    } else {
      this._close(this._selected);
    }
  }

  hasChange() {
    return (!this._selected && this.selected) || (this._selected && this.selected && (this._selected.id !== this.selected.id) );
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
