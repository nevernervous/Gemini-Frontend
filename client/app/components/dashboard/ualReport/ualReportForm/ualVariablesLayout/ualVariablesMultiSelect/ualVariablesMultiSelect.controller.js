class UalVariablesMultiSelectController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'ualVariablesMultiSelect';
    this.filterName = {
      name: ""
    };
    this.ctrlDown = false;
    this.scope = $scope;
  }

  $postLink() {
    this.selectedReference = this.getSelected;
  }
  selectAll() {
    $(".-avaiable-variables option").prop("selected", null);
    $(".-avaiable-variables option").prop("selected", true);
  }

  getSelected() {
    let selectedsIds = {};
    _.each($(".-avaiable-variables").val(), (_id) => { selectedsIds[_id] = true; });
    return _.filter((this.variables.items?this.variables.items:this.variables), function (val) { return selectedsIds[val.id];}, selectedsIds);
  }

  keyUp(event) {
    if ((event.which | event.keyCode) === 17) {
      this.ctrlDown = false;
    }
  }

  keyDown(event) {
    if ((event.which | event.keyCode) === 17) {
      this.ctrlDown = true;
      event.preventDefault();
    }
    if ((event.which | event.keyCode) === 65 && this.ctrlDown) {
      this.selectAll();
      event.preventDefault();
    }
  }
}

export default UalVariablesMultiSelectController;
