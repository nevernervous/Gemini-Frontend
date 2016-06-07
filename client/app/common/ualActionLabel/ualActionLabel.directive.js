import template from './ualActionLabel.html';
import controller from './ualActionLabel.controller';
import './ualActionLabel.scss';

class ualActionLabelComponent {
  constructor() {
    this.restrict = 'E';
    this.scope = {
      label: "@",
      icon: "@"
    };
    this.template = template;
    this.controller = controller;
    this.controllerAs = 'vm';
  }

  link(scope, element, attr, ctrl) {
    ctrl.label = scope.label;
    ctrl.icon = scope.icon;

    scope.$watch(
      () => element.attr('disabled'),
      newValue => {
        let action = newValue ? 'addClass' : 'removeClass';
        let anchor = element.find('a')[action]('-disabled');
        let icon = element.find('i')[action]('-disabled');
      }
    );
  }
}

export default ualActionLabelComponent;
