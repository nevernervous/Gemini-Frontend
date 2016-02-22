import template from './expirationModal.html';
import controller from './expirationModal.controller';
import './expirationModal.scss';

let expirationModalService = function (modal) {
  "ngInject";
  
  let open = (options) => {    
    return modal.open({
      template: '<ual-modal class="-yesno">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm'
    })
  }

  return { open };
};

export default expirationModalService;
