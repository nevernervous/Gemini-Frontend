import template from './expirationModal.html';
import controller from './expirationModal.controller';
import './expirationModal.scss';

let expirationModalService = function (ualModal) {
  "ngInject";
  
  let open = (options) => {    
    return ualModal.open({
      template: '<ual-modal class="-yesno">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm'
    })
  }

  return { open };
};

export default expirationModalService;
