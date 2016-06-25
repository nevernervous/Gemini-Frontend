class UalAutocompleteController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'ualAutocomplete';
    this.isVisible = false;
    this.limit=0;
    this._scope = $scope;

    this.inputHovered = false;

    this.filterName= {
      name: ""
    }

    // RESET
  /*  $scope.$watch((scope) => {
      return $(".show input#selected-searchbox").is(":visible")
    }, (newValue, oldValue) => {
      if(newValue) $(".show input#selected-searchbox").focus();
    });*/
  }
  select($event, item) {
    $event.stopPropagation();
    if (!_.isEqual(this.selected, item) && !!this.onChange) {
     this.onChange() ;
    }
    this.selected = item;
    this.hide();
    this.filterName.name = "";
  }

  getText(item) {
    return !this.property || !item ? item : item[this.property];
  }

  hide(){
    if(this.isVisible){
      this.filterName.name = "";
      this.isVisible = false;
      this.limit=this.isVisible?this.list.length:0;
    }
  }

  show(){
    if(!this.isVisible){
      this.isVisible = true;
      this.limit=this.isVisible?this.list.length:0;
    }
  }
}

export default UalAutocompleteController;
