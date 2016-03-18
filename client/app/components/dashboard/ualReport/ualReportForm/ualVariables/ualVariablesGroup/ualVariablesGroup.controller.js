import $ from 'jquery';

class UalVariablesGroupController {
  /*@ngInject*/
  constructor() {
    this.open = false;
  }

  toggle() {
    if (this.groupEnabled) {
      this.open = !this.open;
    }
  }

}

export default UalVariablesGroupController;
