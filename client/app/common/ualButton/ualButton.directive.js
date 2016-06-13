import './ualButton.scss';

class ualButtonDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
  }

  compile() {
    return {
      pre: function(scope, el, attr){
        const sizeClass = attr.ualButtonSize ? ' ual-button-' + attr.ualButtonSize : '';
        el.addClass('ual-button md-raised md-cornered' + sizeClass);
      }
    }
  }
}

export default ualButtonDirective;
