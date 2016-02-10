import template from './logoutModal.html';
import controller from './logoutModal.controller';
import './logoutModal.scss';

let logoutModalService = function (modal) {
  "ngInject";
  
  let open = (options) => {    
    return modal.open({
      template: '<modal>' + template + '</modal>',
      controller: controller,
      controllerAs : 'vm'
    })
  }

  return { open };
};

export default logoutModalService;
