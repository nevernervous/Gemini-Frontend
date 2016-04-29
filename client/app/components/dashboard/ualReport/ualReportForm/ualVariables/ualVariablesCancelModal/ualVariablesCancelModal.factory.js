import template from './ualVariablesCancelModal.html';
import controller from './ualVariablesCancelModal.controller';
import './ualVariablesCancelModal.scss';

let ualVariablesCancelModalService = function (ualModal) {
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

export default ualVariablesCancelModalService;
