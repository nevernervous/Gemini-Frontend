class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, $timeout) {
    this.name = 'ualFilterCondition';
    this.availableVariables;
    this._timeout = $timeout;
    this._datasourceService = DataSource;
    this.types = ["Value", "Variable"];
    this.operatorsList = ["=", "<", ">", "<>", "in"];
    this._scope = $scope;

    this._subscriptions = [];

    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getVariables();
      }
    });
  }

  trim($event) {
    this._timeout(() => {
      let $target = $($event.target);
      let value = _.trim($target.val());
      $target.val(value);
      this.condition.value = value;
    });
  }

  getPlaceholder() {
    let result = "[variable name]";
    if (this.condition.variable) {
      result = this.condition.variable.dataType == 'Number' ? "numeric value" : this.condition.variable.name;
    }
    return result;
  }

  $onInit() {
    this.getVariables();
  }

  $postLink(){
    this._subscriptions.push(this._scope.$on('$submitted', () => {
        this._scope.filterCondition.$setSubmitted();
      }));
  }

  $onDestroy(){
    this._subscriptions.forEach(suscription => suscription());
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

  reset() {
    this._scope.filterCondition.$setPristine();
    this.condition.value = null;
  }

}

export default UalFilterConditionController;
