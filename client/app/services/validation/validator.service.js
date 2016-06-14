import ValidationResult from './validationResult';

let validatorService = function (xRegExp) {
  "ngInject";

  const types = {
    String: "string"
  };

  let IsNullOrEmpty = (value) => {
    if (typeof (value) === 'undefined' || value === null)
      return true;
    if (value === "")
      return true;
    return false;
  };

  let validations = {
    required: (value, option, type) => {
      let result = new ValidationResult();
      if (IsNullOrEmpty(value)) {
        result.setError("Enter {0}");
      }
      return result;
    },
    regex: (value, option, type) => {
      let result = new ValidationResult();
      let pattern = option.pattern;
      let flags = option.flags;
      let regex = xRegExp(pattern, flags);

      let isInvalid = !!option.exclusive ? regex.test(value) : !regex.test(value);

      if (isInvalid) {
        switch (type) {
          case types.String:
            result.setError('Invalid {0} format', value);
            break;
          default:
            result.setError("Invalid value", value);
        }

      }
      return result;
    },
    min: (value, option, type) => {
      return new ValidationResult();
    },
    max: (value, option, type) => {
      return new ValidationResult();
    },
    type: (value, option) => {
      let result = new ValidationResult();
      switch (option) {
        case types.String:
          if (!_.isString(value)) {
            result.setError('Invalid {0} format', value)
          }
          break;
      }
      return result;
    }
  }

  let isValid = (value, type, options = {
    required: false,
    min,
    max,
    regex: {
      pattern,
      exclusive: true,
      flags: 'i'
    }
  }) => {
    if (!type) {
      throw new Error("Type was not provided for the value");
    }
    let result = validations.required(value, options.required, type);

    if (result.isValid) {
      options.type = type;

      _.forEach(options, (option, key) => {
        if (!result.isValid) {
          return false;
        }
        result = validations[key](value, option, type);
      });
    }
    return result;
  };

  return {
    isValid,
    types
  };
};

export default validatorService;
