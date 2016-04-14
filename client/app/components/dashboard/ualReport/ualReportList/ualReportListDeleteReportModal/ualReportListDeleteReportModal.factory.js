import template from './ualReportListDeleteReportModal.html';
import controller from './ualReportListDeleteReportModal.controller';
import './ualReportListDeleteReportModal.scss';

let ualReportListDeleteReportModalService = function (ualModal) {
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

export default ualReportListDeleteReportModalService;