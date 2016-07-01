import template from './ualExecutedReportModal.html';
import controller from './ualExecutedReportModal.controller';
import './ualExecutedReportModal.scss';

let ualExecutedReportModalService = function (ualModal) {
  "ngInject";
  
  let open = (inputs) => {    
    return ualModal.open({
      template: '<ual-modal class="-fullmodal -executed-report">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: inputs
    })
  }

  return { open };
};

export default ualExecutedReportModalService;
