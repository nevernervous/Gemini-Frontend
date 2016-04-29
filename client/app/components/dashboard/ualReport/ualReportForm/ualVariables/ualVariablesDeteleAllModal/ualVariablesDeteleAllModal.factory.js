import template from './ualVariablesDeteleAllModal.html';
import controller from './ualVariablesDeteleAllModal.controller';
import './ualVariablesDeteleAllModal.scss';

let ualVariablesDeteleAllModalService = function (ualModal) {
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

export default ualVariablesDeteleAllModalService;
