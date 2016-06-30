class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, $timeout, Operator) {
    this.name = 'ualFilterCondition';
    this.availableVariables;
    this._timeout = $timeout;
    this._datasourceService = DataSource;
    this._operatorService=Operator;
    this.acceptComma=true;
    this.types = ["Value", "Variable"];
    this.operatorsList = [{'operator':"="}];
    this.disableAsignation=false;
    this._scope = $scope;
    this._subscriptions = [];
    this.filteredVariables = [];
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getVariables();
      }
    });
  }

  trim($event, model) {
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

  $postLink() {
    this._subscriptions.push(this._scope.$on('$submitted', () => {
      this._scope.filterCondition.$setSubmitted();
    }));
  }

  $onDestroy() {
    this._subscriptions.forEach(suscription => suscription());
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
  getAllOperators(){
    this._operatorService.all().then(response => {
      this._allOperators=response.data;
      this.operatorsList=this._allOperators['String'];
    },
    error => {
      this.operatorsList=[];
    });
  }

  getOperatorListByVariableType(dataType){
    this.operatorsList=this._allOperators[dataType];
    this.condition.operator = {'operator':"="};
    this.changeOperator();
  }

  changeOperator(){
    this._timeout(() => {
      this.extraField=[9,10].indexOf(this.condition.operator.id)>-1;
      this.disableAsignation= [15,16,17,18].indexOf(this.condition.operator.id)>-1;
      this.acceptComma=[1,2,7,8,11,12,13,14].indexOf(this.condition.operator.id)>-1;
    });
    this.resetSecond();
  }

  variableChange(oldValue,newValue){
    this.filteredAvaiableVariables = _.filter(this.availableVariables, { 'dataType': newValue.dataType});
    this.resetSecond();
    this.getOperatorListByVariableType(newValue.dataType);
  }

  resetSecond(){
    this.condition.type= this.types[0];
    this.reset();
  }

  reset() {
    this._scope.filterCondition.$setPristine();
    this.condition.value = null;
    this.condition.secondValue=null;
  }

}

export default UalFilterConditionController;
