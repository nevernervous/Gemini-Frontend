import template from './ualDataSourceCancelModal.html';
import controller from './ualDataSourceCancelModal.controller';
import './ualDataSourceCancelModal.scss';

let ualDataSourceCancelModalService = function (ualModal) {
  "ngInject";

  let open = (inputs) => {
    return ualModal.open({
      template: '<ual-modal class="-yesno">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: inputs
    })
  }

  return { open };
};

export default ualDataSourceCancelModalService;
