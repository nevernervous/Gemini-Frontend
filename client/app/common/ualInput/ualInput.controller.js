class UalInputController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'ualInput';
    this._value = this.value;
    this.debounce = parseInt(this.ualDebounce) || 0;
    this.updateOn= this.updateOn || 'default blur';
    this.options = { getterSetter: true, updateOn: this.updateOn, debounce: { default: this.debounce, blur: 0 } }

    // RESET
    $scope.$watch((scope) => {
      return scope.vm.value
    }, (newValue, oldValue) => {
      this._value = newValue;
    });
  }

  newvalue (value) {
    if (angular.isDefined(value)) {
      this._value = value;
      if ( this.minChars ) {
        this.value = (value && value.length >= this.minChars) ? value : '';
      } else {
        this.value = value;
      }
    }
    return this._value;
  }
}

export default UalInputController;
