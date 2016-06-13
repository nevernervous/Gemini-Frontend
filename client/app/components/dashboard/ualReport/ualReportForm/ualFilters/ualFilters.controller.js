class UalFiltersController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'ualFilters';
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.items={
          "not": false,
          "operator": {
            value: '&',
            text: 'AND'
          },
          "children": []
        };
      }
    });
  }
}

export default UalFiltersController;
