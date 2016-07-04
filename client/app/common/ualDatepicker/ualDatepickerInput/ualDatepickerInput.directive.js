import template from './ualDatepickerInput.html';
import controller from './ualDatepickerInput.controller';
import './ualDatepickerInput.scss';

class ualDatepickerInputDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.require = ['ngModel', 'ualDatepickerInput', '?^mdInputContainer'];
    this.scope = {
      minDate: '=mdMinDate',
      maxDate: '=mdMaxDate',
      placeholder: '@mdPlaceholder',
      dateFilter: '=mdDateFilter'
    };
    this.controller = controller;
    this.controllerAs = 'ctrl';
    this.bindToController = true;
  }

  link(scope, element, attr, controllers) {
    var ngModelCtrl = controllers[0];
    var mdDatePickerCtrl = controllers[1];

    var mdInputContainer = controllers[2];
    if (mdInputContainer) {
      throw Error('ual-datepicker-input should not be placed inside md-input-container.');
    }

    mdDatePickerCtrl.configureNgModel(ngModelCtrl);
  }
}

export default ualDatepickerInputDirective;
