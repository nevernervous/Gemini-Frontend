import './ualInput.scss';

class ualInputDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
  }

  compile() {
    return {
      pre: function(scope, el, attr){
        const icon = attr.ualInputIcon ? attr.ualInputIcon : 'ion-ios-close-outline';
        const iconClass = attr.ualInputIcon ? ' ual-input-icon' : '';
        const sizeClass = attr.ualInputSize ? ' ual-input-' + attr.ualInputSize : '';
        el.addClass('ual-input md-secondary-theme' + iconClass + sizeClass);
        el.find('label').addClass('md-no-float');
        el.append('<md-icon md-font-icon="Ionicons" class="' + icon + '"></md-icon>');
      }
    }
  }
}

export default ualInputDirective;
