import './ualButton.scss';

class ualButtonDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
  }

  compile() {
    return {
      pre: function(scope, el, attr){
        el.addClass('ual-button md-raised md-cornered');
      }
    }
  }
}

export default ualButtonDirective;
