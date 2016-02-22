import template from './ualDataSource.html';
import controller from './ualDataSource.controller';
import './ualDataSource.scss';

let ualDataSourceService = function (modal) {
  "ngInject";
  
  let open = (options) => {    
    return modal.open({
      template: '<ual-modal class="-fullmodal">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm'
    })
  }

  return { open };
};

export default ualDataSourceService;
