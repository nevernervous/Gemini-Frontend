class UalFiltersController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'ualFilters';
    this.collection = [];
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.collection=[];
      }
    });
  }
}

export default UalFiltersController;
