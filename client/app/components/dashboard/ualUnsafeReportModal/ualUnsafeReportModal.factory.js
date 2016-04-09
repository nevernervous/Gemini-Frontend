import template from './ualUnsafeReportModal.html';
import controller from './ualUnsafeReportModal.controller';
import './ualUnsafeReportModal.scss';

let ualUnsafeReportModalService = function (ualModal) {
  "ngInject";
  let open = (options) => {   
    return ualModal.open({
      template: '<ual-modal class="-yesno">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: {
          toState: options.toState,
          state: options.state,
          report: options.report
      },
    });
  }

  return { open };
};

export default ualUnsafeReportModalService;
