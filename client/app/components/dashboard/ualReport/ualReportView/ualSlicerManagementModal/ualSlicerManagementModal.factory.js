import template from './ualSlicerManagementModal.html';
import controller from './ualSlicerManagementModal.controller';
import './ualSlicerManagementModal.scss';

let ualSlicerManagementModalService = function (ualDialog) {
  "ngInject";
  const components = {
    dialog: ualDialog
  }

  const open = (data) => {
    return components.dialog.show({
      locals:{report:data.report},
      parent: angular.element(document.body),
      template: template,
      controller: controller,
      controllerAs : 'vm',
      clickOutsideToClose: false
    })
  }

  return { open };
};

export default ualSlicerManagementModalService;
