class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, $timeout, Operator) {
    this.name = 'ualFilterCondition';
    this.availableVariables;
    this._timeout = $timeout;
    this._datasourceService = DataSource;
    this._operatorService=Operator;
    this.types = ["Value", "Variable"];
    this.operatorsList = [{'operator':"="}];
    this.disableAsignation=false;
    this._scope = $scope;
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getVariables();
      }
    });
  }

  trim($event,model) {
    this._timeout(() => {
      let $target = $($event.target);
      let value = _.trim($target.val());
      $target.val(value);
      model = value;
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
    this.getAllOperators();
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
  getAllOperators(){
    this._operatorService.all().then(response => {
      this._allOperators=response.data;
      this.operatorsList=this._allOperators['String'];
    },
    error => {
      this.operatorsList=[];
    });
  }

  onVariableChange(){
    this._timeout(() => {
      this.getOperatorListByVariableType(this.condition.variable.dataType);
    });
  }

  getOperatorListByVariableType(dataType){
    this.operatorsList=this._allOperators[dataType];
    this.condition.operator = {'operator':"="};
    this.changeOperator();
  }

  changeOperator(){
    this._timeout(() => {
      console.log("changeoperator",this.condition.operator);
      this.disableAsignation=(this.condition.operator.id===15 || this.condition.operator.id===17);
      this.extraField=this.condition.operator.id==9;
    });
  }

  reset() {
    this._scope.filterConditionForm.$setPristine();
    this.condition.value = null;
  }

}

export default UalFilterConditionController;
