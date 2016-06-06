import template from './ualActionLabel.html';
import controller from './ualActionLabel.controller';
import './ualActionLabel.scss';

let ualActionLabelComponent = {
  restrict: 'E',
  bindings: {
     label: "@",
     icon: "@",
     disabled: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualActionLabelComponent;
