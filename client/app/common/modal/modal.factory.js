let logoutModalService = function ($q, ModalService) {
  "ngInject";
  let _modal;
  
  let open = (options) => {
    let deferred = $q.defer();
    
    ModalService.showModal(options)
    .then( modal => {
      _modal = modal;
      modal.close.then( result => deferred.resolve(result) );
    })
    .catch( error => deferred.reject(error) );
    
    return deferred.promise;
  }
  
  let close = () => {
    _modal.controller._close();
  }

  return { open, close };
};

export default logoutModalService;
