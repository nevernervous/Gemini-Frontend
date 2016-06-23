class UalAutocompleteController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'ualAutocomplete';
    this.isVisible = false;
    this.limit=0;
    this._scope = $scope;
    this.filter= {
      name: null
    }
  }
  select($event, item) {
    $event.stopPropagation();
    if (!_.isEqual(this.selected, item) && !!this.onChange) {
     this.onChange() ;
    }
    this.selected = item;
    this.isVisible = false;
  }

  getText(item) {
    return !this.property || !item ? item : item[this.property];
  }

  toogle() {
    this.isVisible = !this.isVisible;
    if(this.isVisible) console.log($("#selected-searchbox"));
    this.limit=this.isVisible?this.list.length:0;
  }
}

export default UalAutocompleteController;
