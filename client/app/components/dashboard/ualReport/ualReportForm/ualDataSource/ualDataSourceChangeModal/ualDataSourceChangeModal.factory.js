import template from './ualDataSourceChangeModal.html';
import controller from './ualDataSourceChangeModal.controller';
import './ualDataSourceChangeModal.scss';

let ualDataSourceChangeModalService = function (ualModal) {
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

export default ualDataSourceChangeModalService;
