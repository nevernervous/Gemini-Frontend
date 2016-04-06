import template from './ualReportNameModal.html';
import controller from './ualReportNameModal.controller';
import './ualReportNameModal.scss';

let ualReportNameModalService = function (ualModal) {
  "ngInject";

  let open = (options) => {   
    return ualModal.open({
      template: '<ual-modal class="-yesno">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: {
          report: options.report,
          reportForm: options.reportForm,
      },
    });
  }

  return { open };
};

export default ualReportNameModalService;
