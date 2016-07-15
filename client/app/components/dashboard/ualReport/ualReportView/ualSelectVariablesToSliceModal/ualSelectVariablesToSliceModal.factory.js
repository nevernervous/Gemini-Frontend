import template from './ualSelectVariablesToSliceModal.html';
import controller from './ualSelectVariablesToSliceModal.controller';
import './ualSelectVariablesToSliceModal.scss';

let ualSelectVariablesToSliceModalService = function (ualDialog) {
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

export default ualSelectVariablesToSliceModalService;
