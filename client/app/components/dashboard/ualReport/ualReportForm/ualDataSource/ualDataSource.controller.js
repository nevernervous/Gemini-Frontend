class UalDataSourceController {
  /*@ngInject*/
  constructor(close, DataSource, selected) {
    this._close = close;
    this._datasource = DataSource;
    this._selected = selected;
    
    this.datasources = []; 
    this.selected = selected; 
    this._initialize();
  }
  
  apply() {
    this._close(this.selected);
  }
  cancel() {
    this._close(this._selected);
  }
  
  _initialize() { 
    this._datasource.all()
    .then( response => this.datasources = response.data );
  }
}

export default UalDataSourceController;
