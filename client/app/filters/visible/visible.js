let visibleFilter = function() {
  "ngInject";

  let filter = (items, property, query = '') => {
    return _.map(items, item => {
      item['_visible'] = (item[property].toLowerCase().indexOf(query.toLowerCase()) > -1);
      return item;
    });
  }

  return filter;
}

export default visibleFilter;
