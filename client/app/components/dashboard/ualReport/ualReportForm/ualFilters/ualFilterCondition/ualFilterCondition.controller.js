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

    this.filteredVariables = [];
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

  getVariables() {
    this._datasourceService.variables(this.datasource)
      .then(response => {
        this.availableVariables = response.data;
        this.filteredAvaiableVariables = [];
      },
      error => {
        this.availableVariables = [];
        this.filteredAvaiableVariables = [];
      });
  }
  variableChange(oldValue,newValue){
    this.filteredAvaiableVariables = _.filter(this.availableVariables, (variable)=>{
      return newValue.dataType == variable.dataType;
    });
    this.condition.operator= this.operatorsList[0] ;
    this.resetSecond();
  }

  resetSecond(){
    this.condition.type= this.types[0];
    this.reset();
  }
  reset() {
    this._scope.filterConditionForm.$setPristine();
    this.condition.value = null;
  }

}

export default UalFilterConditionController;
