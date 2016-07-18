import template from './ualTimerModal.html';
import controller from './ualTimerModal.controller';
import './ualTimerModal.scss';

let ualTimerModalService = function (ualModal) {
  "ngInject";

  let open = (inputs) => {
    return ualModal.open({
      template: '<ual-modal class="-fullmodal -timerModal">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: inputs
    })
  }

  return { open };
};

export default ualTimerModalService;
