let ualModalService = function($q, $rootScope, ModalService, $timeout) {
  "ngInject";
  let _modal;

  let suscriptions = [];

  let open = (options) => {
    let deferred = $q.defer();

    ModalService.showModal(options)
      .then(modal => {
        suscriptions.push($rootScope.$broadcast('UALMODAL.OPEN'));
        $("ual-modal button").focus();
        setBackwardNavigation(true);
        _modal = modal;
        modal.close
          .then(result => deferred.resolve(result))
          .finally(() => {
            setBackwardNavigation(false);
            _modal.controller.onClose && _modal.controller.onClose()
          });
      })
      .catch(error => deferred.reject(error));

    return deferred.promise;
  }

  let close = () => {
    suscriptions.push($rootScope.$broadcast('UALMODAL.CLOSE'));
    _modal.controller._close();
    $rootScope.$on('$stateChangeStart', () => {
       suscriptions.forEach(item => item()); 
    });

  }

  let preventBackwardNavigation = (event) => {
    event = event || window.event;
    let target = event.target;
    let code = event.keyCode || event.which;
    if (code === 8 && !(target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
      event.preventDefault();
    }
  };


  let setBackwardNavigation = (enable) => {
    var $body = angular.element(document.getElementsByTagName("body"));

    if (enable) {
      $body.bind('keydown', preventBackwardNavigation);
    } else {
      $body.unbind('keydown', preventBackwardNavigation);
    }

  }


  return { open, close };
};

export default ualModalService;
