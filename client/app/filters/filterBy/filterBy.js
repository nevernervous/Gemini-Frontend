let filterByFilter = function() {
  "ngInject";

  let sanitize = (item) => {
    if (!item) {
      return item;
    }
    let value = _.cloneDeep(item);
    if (_.isObject(value)) {
      for (let index in value) {
        let item = value[index];
        value[index] = !!item && _.isString(item) ? escape(item) : item;
      }
    }

    if (_.isString(value)) {
      value = !!value && _.isString(value) ? escape(value) : value;
    }

    return value;
  }

  let nonStrictComparision = (actual, expected) => {
    if (!!actual && !!expected) {
      if (_.isObject(actual) && _.isObject(expected)) {
        for (let index in expected) {
          let expectedProperty = expected[index];
          let actualProperty = actual[index];

          return !!actualProperty && actualProperty.toString().toLowerCase().indexOf(expectedProperty.toLowerCase()) > -1;
        }
      }
      if (_.isString(actual) && _.isString(expected)) {
        return actual.indexOf(expected) > -1;
      }
    }
    return true;
  }

  let filter = (items, query) => {
    if(!items){
       return [];
    }
    return items.filter((item) => {
      return nonStrictComparision(sanitize(item), sanitize(query));
    });
  }

  return filter;
}

export default filterByFilter;
