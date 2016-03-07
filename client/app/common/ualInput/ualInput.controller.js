class UalInputController {
  /*@ngInject*/
  constructor() {
    this._value = this.value;
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
