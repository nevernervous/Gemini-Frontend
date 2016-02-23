import template from './logoutModal.html';
import controller from './logoutModal.controller';
import './logoutModal.scss';

let logoutModalService = function (ualModal) {
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

export default logoutModalService;
