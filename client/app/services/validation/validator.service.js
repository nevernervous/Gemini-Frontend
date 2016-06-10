let validatorService = function() {
  "ngInject";

  const types {
    String = "string",
    Number = "number",
  };

  let IsNullOrEmpty = (value) => {
    if (typeof(value) === 'undefined' || value === null)
      return true;
    if (value === "")
      return true;
    return false;
  };


  let isValid = (value, options = {
    required = true,
    regex = {
      pattern,
      flags : 'i'
    },
    min,
    max,
    type
  }) => {
      let result = {
          isValid: true,
          errors
      };

      options[Symbol.iterator] = function() {
        let validations = Object.keys(this);
        let count = 0;
        let isDone = false;

        let next = () => {

            return {done: isDone, value: errorObj }
        }

        return {
          next
        }
      }

      return result;
  };

  return {
    isValid,
    types
  };
};

export default validatorService;
