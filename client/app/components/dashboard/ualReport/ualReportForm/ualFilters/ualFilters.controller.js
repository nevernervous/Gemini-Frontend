class UalFiltersController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'ualFilters';
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
        this._filters={
          "not": false,
          "operator": 'AND',
          "children": []
        };
      }
    });
  }
}

export default UalFiltersController;
