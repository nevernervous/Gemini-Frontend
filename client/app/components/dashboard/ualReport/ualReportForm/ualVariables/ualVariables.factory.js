import template from './ualVariables.html';
import controller from './ualVariables.controller';
import './ualVariables.scss';

let ualVariablesService = function (ualModal, DataSource, ualVariablesDeteleAllModal) {
  "ngInject";

  let open = (inputs) => {
    // DI
    inputs.DataSourceService = DataSource;
    inputs.ualVariablesDeteleAllModal = ualVariablesDeteleAllModal;

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
