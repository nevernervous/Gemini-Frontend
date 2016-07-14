import template from './ualSelectVariablesToSliceModal.html';
import controller from './ualSelectVariablesToSliceModal.controller';
import './ualSelectVariablesToSliceModal.scss';

let ualSelectVariablesToSliceModalService = function (ualModal) {
  "ngInject";

  let open = (inputs) => {

    return ualModal.open({
      template: '<ual-modal class="-yesno -slice">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: inputs,
    });
  }

  return { open };
};

export default ualSelectVariablesToSliceModalService;
