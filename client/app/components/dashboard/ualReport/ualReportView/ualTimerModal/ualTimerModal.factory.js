import template from './ualTimerModal.html';
import controller from './ualTimerModal.controller';
import './ualTimerModal.scss';

let ualTimerModalService = function (ualDialog) {
  "ngInject";
  const components = {
    dialog: ualDialog
  }

  const open = (reportId) => {

    return components.dialog.show({
      parent: angular.element(document.body),
      template: template,
      controller: controller,
      controllerAs : 'vm',
      clickOutsideToClose: false,
      fullscreen: true,
      locals: {
        id: reportId
      }
    })
  }

  return { open };
};

export default ualTimerModalService;
