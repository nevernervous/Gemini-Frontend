class UalFiltersController {
  /*@ngInject*/
  constructor($scope, DataSource) {
    this.name = 'ualFilters';
    this.availableVariables;
    this.resetEnable = false;
    this._datasourceService = DataSource;
    this._filters = this.filters.get();

    this.hasLimit = function hasLimit(group){
      let value = false;
      _.forEach(group.children,function(element){
        if(!element.children) return (value = true);
        value |= hasLimit(element);
        if(value) return;
      });
      return value;
    }

    $scope.$watch((scope) => {
      return scope.vm._filters
    }, (newValue, oldValue) => {
      this.filters.set(newValue);
      this.resetEnable = this.hasLimit(this._filters);
    }, true);
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this._filters = {
          "not": false,
          "operator": {
            "id": 1,
            "operator": "AND"
          },
          "children": []
        };
        this.resetEnable = false;
        this.getVariables();
      }
    });
  }

  getVariables() {
    this._datasourceService.variables(this.datasource)
      .then(response => {
        this.availableVariables = response.data;
      },
      error => {
        this.availableVariables = [];
      });
  }

  getGroupClass(){
    return {
      'not-group-and' : (this._filters.not && this._filters.operator.operator =='AND'),
      'not-group-or' : (this._filters.not && this._filters.operator.operator =='OR')
    };
  }

}

export default UalFiltersController;
