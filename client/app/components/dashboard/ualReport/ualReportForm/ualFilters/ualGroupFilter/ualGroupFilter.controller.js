

class UalGroupFilterController {
  /*@ngInject*/
  constructor(
    // COMPONENTS
    ualDialog) {
    this.name = 'ualGroupFilter';

    // COMPONENTS
    this.components = {
      dialog: ualDialog
    }

    // STATE
    // TODO: [IMPROVEMENT] Move operators to an .value provider
    this.andOperator = {
      "id": 1,
      "operator": "AND"
    };
    this.orOperator = {
      "id": 2,
      "operator": "OR"
    };
    this.operatorGroup = this.andOperator;
    this.selectedItem = this.andOperator;
    this.conditionList = [this.andOperator, this.orOperator];

    // TODO: [REFACTOR] Move this code, find the way!!!!
    this.resetDown = function resetDown(group) {
      let resetAllExceptions = ["is blank", "not blank", "is null", "not null"];
      _.forEach(group.children, function (element) {
        if (!element.children) {
          element.type = "Value";
          element.value = null;
          element.secondValue = null;
          let resetAll = resetAllExceptions.indexOf(element.operator.operator.toLowerCase()) < 0;
          if (resetAll) {
            element.operator= { "id": 1, 'operator': "=" };;
          }
        } else {
          resetDown(element);
        }
      });
    }
  }

  // NOT
  toggle() {
    this.filters.not = !this.filters.not;
  }

  // CONDITION / ADD
  addChildren() {
    this.filters.children.push({
      "variable": null,
      "operator": { "id": 1, "operator": "=" },
      "type": "Value",
      "value": null,
      "secondValue": null
    });

  }
  // CONDITION / REMOVE
  removeItem(id) {
    this.filters.children.splice(id, 1);
  }

  // GROUP / ADD
  addGroup() {
    this.filters.children.push({
      "not": false,
      "operator": this.andOperator,
      "children": []
    });
  }

  // GROUP / REMOVE
  removeGroup(id) {
    this.components.dialog.confirm(
      'Remove limit condition group?',
      null)
    .then(() => {
      this.filters.children.splice(id, 1);
    });
  }
  // GROUP / REMOVE ALL
  cleanGroup(event) {
    this.components.dialog.confirm(
      'Remove limit condition group?',
      null,
      { target: event })
    .then(() => {
      this.filters.children = [];
    });
  }
  // GROUP / RESET ALL
  resetAll(event) {
    this.components.dialog.confirm(
      'Reset all limits?',
      null,
      { target: event })
    .then(() => {
      this.resetDown(this.filters);
    });
  }

  getGroupClass() {
    return {
      'not-group-soft': (this.filters.not && !this.parentOperator),
      'not-group-strong': (this.filters.not && this.parentOperator),
      'empty': this.filters.children.length == 0
    };
  }
}

export default UalGroupFilterController;
