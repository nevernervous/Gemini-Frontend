class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, $timeout, Operator) {
    this.name = 'ualFilterCondition';
    this.availableVariables;
    this._timeout = $timeout;
    this._datasourceService = DataSource;
    this._operatorService = Operator;
    this.types = ["Value", "Variable"];
    this.operatorsList = [];
    this.disableAsignation = false;
    this.acceptCommas=true;
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
    let result = "Enter [variable name]";
    if (this.condition.variable) {
      if(this.condition.variable.dataType == 'Date')
      {
        return "mm/dd/yyyy";
      }
      result = this.condition.variable.dataType == 'Number' ? "Enter numeric value" : `Enter ${this.condition.variable.name}`;
    }
    return result;
  }

  $onInit() {
    this.getVariables();
    this.getAllOperators();
  }

  $postLink() {
    this._subscriptions.push(this._scope.$on('REPORT.EXECUTE', () => {
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
  getAllOperators() {
    this._operatorService.all().then(response => {
      this._allOperators = response.data;
      this.operatorsList = this._allOperators['String'];
    },
      error => {
        this.operatorsList = [];
      });
  }

  getOperatorListByVariableType(dataType) {
    this.operatorsList = this._allOperators[dataType];
    this.condition.operator = { "id": 1, 'operator': "=" };
    this.changeOperator();
  }

  changeOperator() {
    this._timeout(() => {
      let extraFieldArray = ["between", "not between"];
      let disableAsignationArray = ["is blank", "is not blank", "is null", "is not null"];
      let acceptCommasArray = ['=','<>','begins with','does not begin with','contains','does not contain','ends with','does not end with']
      this.acceptCommas= acceptCommasArray.indexOf(this.condition.operator.operator.toLowerCase()) > -1;
      this.extraField = extraFieldArray.indexOf(this.condition.operator.operator.toLowerCase()) > -1;
      this.disableAsignation = disableAsignationArray.indexOf(this.condition.operator.operator.toLowerCase()) > -1;
    });
    this.resetSecond();
  }

  variableChange(oldValue, newValue) {
    this.filteredAvaiableVariables = _.filter(this.availableVariables, { 'dataType': newValue.dataType });
    if (oldValue) {
      this.resetSecond();
    }
    this.getOperatorListByVariableType(newValue.dataType);
  }

  resetSecond() {
    this.condition.type = this.types[0];
    this.reset();
  }

  reset() {
    if (this._scope.filterCondition.$error.length == 0) {
      this._scope.filterCondition.$setPristine();
    }
    this.condition.value = null;
    this.condition.secondValue = null;
  }

}

export default UalFilterConditionController;
