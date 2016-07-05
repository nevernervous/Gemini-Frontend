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

    this.filteredVariables = [];
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
      let extraFieldArray = ["between","not between"];
      let disableAsignationArray = ["is blank","not blank","is null","not null"];
      this.extraField = extraFieldArray.indexOf(this.condition.operator.operator.toLowerCase())>-1;
      this.disableAsignation= disableAsignationArray.indexOf(this.condition.operator.operator.toLowerCase())>-1;
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
    this._scope.filterConditionForm.$setPristine();
    this.condition.value = null;
    this.condition.secondValue=null;
  }

  validateTwoDates(){
    if(!!this.condition.value && !!this.condition.secondValue){
      let firstDateArray=this.condition.value.split("/");
      let secondDateArray=this.condition.secondValue.split("/");
      let tempFirstDate = new Date(firstDateArray[2], --firstDateArray[0], firstDateArray[1]);
      let tempSecondDate = new Date(secondDateArray[2], --secondDateArray[0], secondDateArray[1]);
      return tempFirstDate > tempSecondDate;
    }
    return false;
  }

}

export default UalFilterConditionController;
