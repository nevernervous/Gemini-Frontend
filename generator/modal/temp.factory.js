import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= name %>Service = function (modal) {
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

export default <%= name %>Service;
