import template from './ualResetGroupModal.html';
import controller from './ualResetGroupModal.controller';
import './ualResetGroupModal.scss';

let ualResetGroupModalService = function (ualModal) {
  "ngInject";
  
  let open = (inputs) => {    
    return ualModal.open({
      template: '<ual-modal>' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: inputs
    })
  }

  return { open };
};

export default ualResetGroupModalService;
