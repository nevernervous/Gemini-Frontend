import template from './ualRemoveGroupModal.html';
import controller from './ualRemoveGroupModal.controller';
import './ualRemoveGroupModal.scss';

let ualRemoveGroupModalService = function (ualModal) {
  "ngInject";

  let open = (inputs) => {
    return ualModal.open({
      template: '<ual-modal class="-yesno">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: inputs
    })
  }

  return { open };
};

export default ualRemoveGroupModalService;
