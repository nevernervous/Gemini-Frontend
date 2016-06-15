let validatorService = function(xRegExp, Formater) {
  "ngInject";

  const flags = "i";

  const errorMessages = {
    'number': {
      regex: "Enter numeric value",
      type: "Numeric value expected"
    },
    "default":{
      regex: "Invalid value",
      type: "Invalid {0}",
      required: "Enter {0}"
    }
  }

  let getErrorMessages = (type) => {
    return errorMessages[type] || errorMessages["default"];
  }

  let typeValidations = {
    'number': (value, type) => {
      let isNumber;
      try {
        let numberValue = +value;
        isNumber = !_.isNaN(numberValue) && _.isNumber(numberValue);
      } catch (err) {
        isNumber = false;
      }
      var messages = getErrorMessages(type);
      return !isNumber ? messages.type : null;
    }
  }

  let validations = {
    required: (value, type, variable) => {
      var messages = getErrorMessages("default");
      let result = !value ? messages.required : null;
      return Formater.format(result, variable.name)
    },
    regex: (value, type, variable) => {
      let pattern = variable.Regex;
      let regex = xRegExp(pattern, flags);
      var messages = getErrorMessages(type);

      let isInvalid = !regex.test(value);
      let result = isInvalid ? messages.regex : null;

      return Formater.format(result, variable.name);
    },
    type: (value, type) => {
      let typeFunc = typeValidations[type] || _.noop;
      let result = typeFunc(value, type);
      return Formater.format(result, type);
    }
  }

  let isValid = (value, variable) => {
    let type = variable.DataType;
    let message;

    if (!type) {
      message = "Type was not provided for the value";
    }

    var options = ["required", "type", "regex"];

    _.forEach(options, (item) => {
      if(!!message){
        return false;
      }
      let validFun = validations[item] || _.noop;
      message = validFun(value, type, variable);
    });


    return {
      isValid: !message,
      message
    };
  };

  return {
    isValid
  };
};

export default validatorService;
