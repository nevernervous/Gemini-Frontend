class UalVariablesMultiSelectController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualVariablesMultiSelect';
    this.filterName = {
      name: ""
    };
    this.ctrlDown = false;
  }

  selectAll() {
    $(".-avaiable-variables option").prop("selected", null);
    $(".-avaiable-variables option").prop("selected", true);
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
