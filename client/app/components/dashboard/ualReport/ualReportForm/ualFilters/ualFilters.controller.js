class UalFiltersController {
  /*@ngInject*/
  constructor($scope, DataSource) {
    this.name = 'ualFilters';
    this.availableVariables;
    this._datasourceService = DataSource;
    this._filters = this.filters.get();

    $scope.$watch((scope) => {
      return scope.vm._filters
    }, (newValue, oldValue) => {
      this.filters.set(newValue);
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
      'not-group-and' : (this._filters.not && this._filters.operator =='AND'),
      'not-group-or' : (this._filters.not && this._filters.operator =='OR')
    };
  }

}

export default UalFiltersController;
