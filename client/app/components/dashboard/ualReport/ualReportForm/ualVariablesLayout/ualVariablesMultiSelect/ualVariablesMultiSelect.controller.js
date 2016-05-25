class UalVariablesMultiSelectController {
  /*@ngInject*/
  constructor($scope, DataSource) {
    this.name = 'ualVariablesMultiSelect';

    this._service = {
      datasource: DataSource
    };

    this.filterName = {
      name: ""
    };
    this.ctrlDown = false;
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue != oldValue) {
        this.getvariables();
      }
    });
  }

  selectAll() {
    $(".-avaiable-variables option").prop("selected", null);
    $(".-avaiable-variables option").prop("selected", true);
  }


  getvariables() {
    this._service.datasource.variables(this.datasource)
      .then(response => {
          this.avaiableVariables = response.data.items;
        },
        error => {
          this.avaiableVariables = [];
        });
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
