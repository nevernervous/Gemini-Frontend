class UalDataSourceController {
  /*@ngInject*/
  constructor($rootScope, close, DataSource, selected, ualDataSourceChangeModal, ualDataSourceCancelModal, $filter) {
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

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
  }

  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }

  apply() {
    if (this._selected && this.hasChange()) { // FIRST TIME
      this._changemodal.open({ oldDataSource: this._selected, newDataSource: this.selected })
        .then(response => response && this._closemodal(this.selected));
    } else {
      this._closemodal(this.selected);
    }

  }
  cancel() {
    if ( this.hasChange() ) {
      this._cancelmodal.open()
        .then(response => response && this._closemodal(this._selected) );
    } else {
      this._closemodal(this._selected);
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
  
  checkOverflow(){
      let $marker = $("#overflow-marker");
      let $container = $("#content-list");
      let $contentList = $("#data-source-list");
      
      let markerWidth = $marker.position().left;
      let containerWidth = $container.width();

      let hasHorizontalOverflow = markerWidth > containerWidth;
      let needHorizontalFill = $container.height() > $contentList.height();

      if (hasHorizontalOverflow) {
          $("#data-source-list").removeClass("-horizontal-fill");
          return;
      }
      
      if(needHorizontalFill){
          $("#data-source-list").addClass("-horizontal-fill");
      }
  }

  _initialize() {
    this._datasource.all('group')
      .then(response => this.datasources = response.data);
  }
}

export default UalDataSourceController;
