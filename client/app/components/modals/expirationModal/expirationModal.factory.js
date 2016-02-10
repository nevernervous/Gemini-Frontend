import template from './expirationModal.html';
import controller from './expirationModal.controller';
import './expirationModal.scss';

let expirationModalService = function (modal) {
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

export default expirationModalService;
