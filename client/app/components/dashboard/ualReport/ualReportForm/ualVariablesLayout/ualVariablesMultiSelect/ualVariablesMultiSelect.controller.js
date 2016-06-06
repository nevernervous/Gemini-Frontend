class UalVariablesMultiSelectController {
  /*@ngInject*/
  constructor($scope, DataSource, ualTooltipService) {
    this.name = 'ualVariablesMultiSelect';
    this._ualTooltipService=ualTooltipService;

    this._service = {
      datasource: DataSource
    };

    this.filterName = {
      name: ""
    };

    this._avaiable = {};

    this.ctrlDown = false;
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this._avaiable = {
          isempty: true,
          total: 0,
          filter: ''
        }
        this.getvariables();
      }
    });
  }

  selectAll() {
    _.each(this.avaiableVariables, (item,idx) => {this.avaiableVariables[idx].selected = false;});
    let visible = _.filter(this.avaiableVariables, (variable)=>{return variable._visible;});
    console.log(visible.length);
    _.each(visible, (item) => item.selected = true);
  }


  getvariables() {
    this._service.datasource.variables(this.datasource)
      .then(response => {
          this.avaiableVariables = response.data;
          this._avaiable = {
            isempty: (this.avaiableVariables.length==0),
            total: this.avaiableVariables.length,
            filter: ''
          }
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

  showTooltip(container, name, description, position = 'right') {
    let hasEllipsis = $("#"+container).hasClass("is-truncated");
    let text = hasEllipsis ? "<span class='title'>"+name+"</span></br>"+description : description;
    this._ualTooltipService.show({
      container: container,
      text: text,
      position: position
    });
  }

  hideTooltip() {
    this._ualTooltipService.hide();
  }
}

export default UalVariablesMultiSelectController;
