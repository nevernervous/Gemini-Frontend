import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= name %>Service = function (ualModal) {
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

export default <%= name %>Service;
