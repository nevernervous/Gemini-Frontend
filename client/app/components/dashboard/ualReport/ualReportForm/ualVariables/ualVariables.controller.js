class UalVariablesController {
  /*@ngInject*/
  constructor(close, $q, DataSourceService, ualVariablesCancelModal, ualVariablesDeteleAllModal, datasource, selecteds) {
    // SERVICES
    this._close = close;
    this._datasourceService = DataSourceService;
    this._cancelmodal = ualVariablesCancelModal;
    this._deleteallmodal = ualVariablesDeteleAllModal;
    this._q = $q;

    // VARS / PRIVATE
    this._datasource = datasource;
    this._selecteds = selecteds;

    // VARS / PUBLIC
    this.variables = [];
    this.selecteds = _.clone(selecteds) || [];

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

  selectAll(){
    this.variables.forEach( item => {
      let index = this.selecteds.indexOf(item.id);
      if (index == -1){
        this.selecteds.push(item.id);
      }
    });
  }

  deleteAll() {
    this._deleteallmodal.open()
      .then(response => {
        if (response) this.selecteds = [];
      });
  }

  apply() {
    this._close(this.selecteds);
  }
  cancel() {
    if ( this._hasChange() ) {
      this._cancelmodal.open()
        .then(response => response && this._close(this._selecteds) );
    } else {
    this._close(this._selecteds);
  }
  }

  _hasChange() {
    if ( this._selecteds.length === this.selecteds.length ) {
      let index = 0;
      for ( ; index < this._selecteds.length; index ++) {
        if ( this._selecteds[index].id !== this.selecteds[index].id ) {
          return true;
        }
      }
      return false;
    }
    return true;
  }

  _serialize(groups, index, promise) {
    index += 1;
    promise.then(variables => {
      this.variables = _.union(this.variables, variables.data);

      if (index < groups.length) {
        this._serialize(groups, index,
          this._datasourceService.variables(this._datasource, groups[index]));
      }
    });
  }

  _initialize() {
    this._datasourceService.groups(this._datasource)
      .then(groups => this._serialize(groups.data, -1, this._q.when({ data: [] })));
  }
}

export default UalVariablesController;
