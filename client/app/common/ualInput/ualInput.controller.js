class UalInputController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'ualInput';
    this._value = this.value;
    this.debounce = parseInt(this.ualDebounce) || 0;
    this.options = { getterSetter: true, updateOn: 'default blur', debounce: { default: this.debounce, blur: 0 } }

    // RESET
    $scope.$watch((scope) => {
      return scope.vm.value
    }, (newValue, oldValue) => {
      this._value = newValue;
    });
  }

  newvalue (value) {
    if (value) {
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
