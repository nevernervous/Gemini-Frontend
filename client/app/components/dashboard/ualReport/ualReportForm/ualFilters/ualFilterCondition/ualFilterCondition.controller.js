// TODO: [FIX] Add validation and Placeholder to values autocompletes
class UalFilterConditionController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $scope,
    $timeout,
    // SERVICES
    DataSource,
    Operator) {
    this.name = 'ualFilterCondition';

    // INTERNALS
    this.$timeout = $timeout;
    this.$scope = $scope;

    // SERVICES
    this._datasourceService = DataSource;
    this._operatorService = Operator;

    // STATE
    this.types = ["Value", "Variable"];
    this.availableVariables;
    this.operatorsList = [];
    this.disableAsignation = false;
    this.acceptCommas=true;
    this._subscriptions = [];
    this.filteredVariables = [];

    // WATCHERS
    // TODO: [IMPROVEMENT] Try to change this for $onChange
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getVariables();
      }
    });
  }

  // LIFECYCLE
  $onInit() {
    this.getVariables();
    this.getAllOperators();
    this.watchOperator();
    this.watchVariable();
  }
  getVariables() {
    this._datasourceService.variables(this.datasource).then(
    response => {
      this.availableVariables = response.data;
      this.filteredAvaiableVariables = [];
    },
    error => {
      this.availableVariables = [];
      this.filteredAvaiableVariables = [];
    });
  }
  getAllOperators() {
    this._operatorService.all().then(
    response => {
      this._allOperators = response.data;
      this.operatorsList = this._allOperators['String'];
    },
    error => {
      this.operatorsList = [];
    });
  }
  watchOperator() {
    this.$scope.$watch((scope) => {
      return scope.vm.condition.operator
    }, (newValue, oldValue) => {
      this.changeOperator();
    });
  }
  watchVariable() {
    this.$scope.$watch((scope) => {
      return scope.vm.condition.variable
    }, (newValue, oldValue) => {
      this.variableChange(newValue, oldValue);
    });
  }
  $postLink() {
    this._subscriptions.push(this.$scope.$on('REPORT.EXECUTE', () => {
      this.$scope.filterCondition.$setSubmitted();
    }));
  }
  $onDestroy() {
    this._subscriptions.forEach(suscription => suscription());
  }

  // TODO: [FIX] Implement trim feature
  trim($event, model) {
    this.$timeout(() => {
      let $target = $($event.target);
      let value = _.trim($target.val());
      $target.val(value);
      model = value;
    });
  }

  getPlaceholder() {
    let result = "Enter [variable name]";
    if (this.condition.variable) {
      if(this.condition.variable.dataType == 'Date') {
        return "mm/dd/yyyy";
      }
      result = this.condition.variable.dataType == 'Number' ? "Enter numeric value" : `Enter ${this.condition.variable.name}`;
    }
    return result;
  }

  // CHAGNE / OPERATOR
  changeOperator() {
    const extraFieldArray = ["between", "not between"];
    const disableAsignationArray = ["is blank", "is not blank", "is null", "is not null"];
    const acceptCommasArray = ['=','<>','begins with','does not begin with','contains','does not contain','ends with','does not end with'];
    this.acceptCommas= acceptCommasArray.indexOf(this.condition.operator.operator.toLowerCase()) > -1;
    this.extraField = extraFieldArray.indexOf(this.condition.operator.operator.toLowerCase()) > -1;
    this.disableAsignation = disableAsignationArray.indexOf(this.condition.operator.operator.toLowerCase()) > -1;

    this.resetSecond();
  }

  // CHANGE / VARIABLE
  variableChange(newValue, oldValue) {
    if ( oldValue ) {
      this.resetSecond();
    }
    if ( newValue ) {
      this.filteredAvaiableVariables = _.filter(this.availableVariables, { 'dataType': newValue.dataType });
      this.operatorsList = this._allOperators[newValue.dataType];
      this.condition.operator = { "id": 1, 'operator': "=" };
      this.changeOperator();
    }
  }

  // RESET
  resetSecond() {
    this.condition.type = this.types[0];
    this.reset();
  }
  reset() {
    if (this.$scope.filterCondition.$error.length == 0) {
      this.$scope.filterCondition.$setPristine();
    }
    this.condition.value = null;
    this.condition.secondValue = null;
  }

}

export default UalFilterConditionController;
