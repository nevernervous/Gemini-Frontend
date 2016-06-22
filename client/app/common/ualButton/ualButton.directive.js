import './ualButton.scss';

class ualButtonDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
  }

  compile() {
    return {
      pre: function(scope, el, attr){
        const theme = attr.ualButton || 'primary';
        const themeClass = ` md-${theme}`;
        const sizeClass = attr.ualButtonSize ? ' ual-button-' + attr.ualButtonSize : '';
        el.addClass('ual-button md-raised md-primary' + themeClass + sizeClass);
      }
    }
  }
}

export default ualButtonDirective;
