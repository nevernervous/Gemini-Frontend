import template from './ualVariables.html';
import controller from './ualVariables.controller';
import './ualVariables.scss';

let ualVariablesService = function (ualModal, DataSource) {
  "ngInject";
  
  let open = (inputs) => {  
    // DI
    inputs.DataSource = DataSource;

    // OPEN
    return ualModal.open({
      template: '<ual-modal class="-fullmodal ual-variables">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: inputs
    })
  }

  return { open };
};

export default ualVariablesService;
