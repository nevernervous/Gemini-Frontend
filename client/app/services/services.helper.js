import angular from 'angular';

let servicesHelper = function ($http, $q) {
  "ngInject";

  let _stratey = (iterator) => {
    if ( _.isArray(iterator) ) {
      return {
        _head(iterator) {  return _.head(iterator) },
        _tail(iterator) {  return _.drop(iterator) },
        _isDone(item)   {  return !item; },
        _promise(item)  {  return $http(next); }
      }
    } else if ( iterator.next ) { // IS GENERATOR
      return {
        _head(iterator) {  return iterator.next(); },
        _tail(iterator) {  return iterator; },
        _isDone(item)   {  return item.done; },
        _promise(item)  {  return item.value; }
      }
    }
    return;
  }

  let serialize = function(elements) {
    let deferred = $q.defer();
    let hooks = _stratey(elements);

    if ( hooks ) {

      function _serialize(elements, hooks, deferred) {
        let next = hooks._head(elements);
        if ( hooks._isDone(next) ) {
          deferred.resolve();
        } else {
          hooks._promise(next).then( response => {
            deferred.notify(response);
            _serialize(hooks._tail(elements), hooks, deferred)
          });
        }
      }

      _serialize(elements, hooks, deferred);

    } else {
      deferred.reject();
    }

    return deferred.promise;
  }

  return {
    serialize
  };
};



export default servicesHelper;
