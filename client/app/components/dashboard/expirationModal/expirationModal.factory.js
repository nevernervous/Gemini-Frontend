import template from './expirationModal.html';
import controller from './expirationModal.controller';
import './expirationModal.scss';

let expirationModalService = function (ualDialog) {
  "ngInject";
  const components = {
    dialog: ualDialog
  }

  const open = () => {

    return components.dialog.show({
      parent: angular.element(document.body),
      template: template,
      controller: controller,
      controllerAs : 'vm',
      clickOutsideToClose: false
    })
  }

  return { open };
};

export default expirationModalService;
