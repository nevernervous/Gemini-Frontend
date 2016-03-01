class UalDataSourceController {
  /*@ngInject*/
  constructor(close, DataSourceService, selected, ualDataSourceChangeModal) {
    this._close = close;
    this._datasourceService = DataSourceService;
    this._changemodal = ualDataSourceChangeModal;
    this._selected = selected;
    
    this.datasources = []; 
    this.selected = selected; 
    this._initialize();
  }
  
  apply() {
    if (this._selected && (this._selected !== this.selected) ) { 
      this._changemodal.open({oldDataSource: this._selected, newDataSource: this.selected})
      .then(response => response && this._close(this.selected) );
    } else {
      this._close(this.selected);  
    }
    
  }
  cancel() {
    this._close(this._selected);
  }
  
  _initialize() { 
    this._datasourceService.all()
    .then( response => { 
      this.datasources = response.data;
    });
  }
}

export default UalDataSourceController;
