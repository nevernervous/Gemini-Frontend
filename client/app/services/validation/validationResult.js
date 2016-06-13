class ValidationResult {
  constructor(isValid = true) {
    this.isValid = isValid;
    this.error = "";
    this.value = undefined;
  }

  setError(message, value = undefined) {
    this.isValid = false;
    this.error = message;
    this.value = value;
  }

  getMessage(...parameters) {
    return this.format(this.error, parameters)
  }

  format(text, values) {
    var pattern = /\{\d+\}/g;
    return text.replace(pattern, function (capture) {
      return values[capture.match(/\d+/)];
    });
  }

}

export default ValidationResult;

