let ualModalService = function ($q, $rootScope, ModalService) {
  "ngInject";
  let _modal;

  let open = (options) => {
    let deferred = $q.defer();

    ModalService.showModal(options)
    .then( modal => {
      _modal = modal;

      $rootScope.$on('SESSION.LOGOUT', () => _modal.controller._close() );

      modal.close
      .then( result => deferred.resolve(result) )
      .finally( () => _modal.controller.onClose && _modal.controller.onClose());
    })
    .catch( error => deferred.reject(error) );

    return deferred.promise;
  }

  let close = () => {
    _modal.controller._close();
  }

  return { open, close };
};

export default ualModalService;
