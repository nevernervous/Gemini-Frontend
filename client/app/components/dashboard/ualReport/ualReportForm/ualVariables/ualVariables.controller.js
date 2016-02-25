class UalVariablesController {
  /*@ngInject*/
  constructor(close, datasource, selecteds) {
    this._close = close;
    this._datasource = datasource;
    this._selecteds = selecteds;
     
    this.selecteds = selecteds || []; 
    this._initialize();
  }
  
  isSelected(variable) { 
    return (this.selecteds.indexOf(variable) > -1);
  }
  toggle(variable) { 
    let index = this.selecteds.indexOf(variable);
    (index > -1) ?  
      this.selecteds.splice(index, 1) :
      this.selecteds.push(variable);
  }
  
  apply() {
    this._close(this.selecteds);  
  }
  cancel() {
    this._close(this._selecteds);
  }
  
  _initialize() { 
    // TODO: load variables data
  }
}

export default UalVariablesController;
