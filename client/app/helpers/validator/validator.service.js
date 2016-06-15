let validatorService = function (xRegExp, Formater) {
  "ngInject";

  const flags = "i";
  const inClause = "in";

  const errorMessages = {
    'string': {
      regex: "Invalid {0} format",
      type: "Invalid {0} format",
      operator: "Not allowed multiple values"
    },
    "default": {
      regex: "Invalid value",
      type: "Invalid {0}",
      required: "Enter {0}"
    }
  }

  let getErrorMessages = (type) => {
    return errorMessages[type] || errorMessages["default"];
  }

  let typeValidations = {
    'string': (value, type) => {
      let messages = getErrorMessages(type);
      return !_.isString(value) ? messages.type : null;
    }
  }

  let validations = {
    required: (value, type, variable) => {
      let messages = getErrorMessages("default");
      let result = !value ? messages.required : null;
      return Formater.format(result, variable.name)
    },
    regex: (value, type, variable) => {
      let pattern = variable.Regex;
      let regex = xRegExp(pattern, flags);
      let messages = getErrorMessages(type);

      let isInvalid = !regex.test(value);
      let result = isInvalid ? messages.regex : null;

      return Formater.format(result, variable.name);
    },
    type: (value, type) => {
      let typeFunc = typeValidations[type] || _.noop;
      let result = typeFunc(value, type);
      return Formater.format(result, type);
    },
    operator: (value, type, variable) => {
        let hasMultipleValues = value.indexOf(',') !== -1;
        let isInvalid = variable.operator !== inClause && hasMultipleValues;
        let messages = getErrorMessages(type);
        return isInvalid ? Formater.format(messages.operator, variable.name) : null;
    }
  }

  let isValid = (value, variable) => {
    let type = variable.DataType;
    let message;

    if (!type) {
      message = "Type was not provided for the value";
    }

    var options = ["required", "type", "operator", "regex"];

    _.forEach(options, (item) => {
      if (!!message) {
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
