import './ualToast.scss';
import template from './ualToast.html';

let ualToastService = function ($mdToast) {
  "ngInject";

  const icons = {
    'success': 'ion-ios-checkmark-outline',
    'warning': 'ion-ios-information-outline',
    'error': 'ion-ios-close-outline'
  }

  const show = (text, type = 'success', parent = 'body', autoclose = true, closable = false) => {
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
      locals          : locals,
      parent          : parent
    });
  }

  const success = (text, autoclose, parent) => {
    show(text, 'success', parent, autoclose, false);
  }
  const error = (text, autoclose, parent)  => {
    show(text, 'error',   parent, autoclose, true);
  }
  const warning = (text, autoclose, parent) => {
    show(text, 'warning', parent, autoclose, false);
  }
  const close = () => {
    $mdToast.hide();
  }
  return {
    success,
    error,
    warning,
    close
  };
};

export default ualToastService;
