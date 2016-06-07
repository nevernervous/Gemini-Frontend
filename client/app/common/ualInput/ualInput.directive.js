import './ualInput.scss';

class ualInputDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
  }

  compile() {
    return {
      pre: function(scope, el, attr){
        el.addClass('ual-input md-secondary-theme');
        el.find('label').addClass('md-no-float');
      }
    }
  }
}

export default ualInputDirective;
