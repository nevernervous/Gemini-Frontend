import template from './ualDataSource.html';
import controller from './ualDataSource.controller';
import './ualDataSource.scss';

let ualDataSourceService = function (ualModal) {
  "ngInject";
  
  let open = (options) => {    
    return ualModal.open({
      template: '<ual-modal class="-fullmodal">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm'
    })
  }

  return { open };
};

export default ualDataSourceService;
