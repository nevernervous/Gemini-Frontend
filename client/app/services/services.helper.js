import angular from 'angular';

let servicesHelper = function ($http, $q) {
  "ngInject";

  let serialize = (requests, deferred = $q.defer()) => {

    let head = _.head(requests);
    if ( head ) {
      $http(head).then( response => {
        const tails = _.drop(requests);
        deferred.notify(response);
        _.isEmpty(tails) ? deferred.resolve() : serialize(tails, deferred)
      });
    } else {
      deferred.resolve();
    }

    return deferred.promise;
  }

  return {
    serialize
  };
};

export default servicesHelper;
