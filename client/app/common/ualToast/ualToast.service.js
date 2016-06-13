import './ualToast.scss';
import template from './ualToast.html';

let ualToastService = function ($mdToast) {
  "ngInject";

  const icons = {
    'success': 'ion-ios-checkmark-outline',
    'warning': 'ion-ios-information-outline',
    'error': 'ion-ios-close-outline'
  }

  const show = (text, type = 'success', autoclose = true, closable = false) => {
    const delay  = autoclose ? 5000 : 0;
    const locals = {
      text,
      icon: icons[type],
      type,
      closable };

    $mdToast.show({
      hideDelay       : delay,
      position        : 'top right',
      controller      : 'ualToastController',
      controllerAs    : 'vm',
      bindToController: true,
      template        : template,
      locals          : locals
    });
  }

  const success = (text, autoclose) => {
    show(text, 'success', autoclose, false);
  }
  const error = (text, autoclose)  => {
    show(text, 'error',   autoclose, true);
  }
  const warning = (text, autoclose) => {
    show(text, 'warning', autoclose, false);
  }
  return {
    success,
    error,
    warning
  };
};

export default ualToastService;
