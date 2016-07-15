import template from './ualIcon.html';
import controller from './ualIcon.controller';
import './ualIcon.scss';

import erase from './images/erase.svg';

const images = {
  erase
}


class ualIconDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.template = template;
    this.controller = controller;
  }

  compile() {
    return {
      pre: function(scope, el, attr){
        if ( attr.icon ) {
          el.attr('md-font-icon', 'Ionicons');
          el.addClass(attr.icon);
        }
        if ( attr.svg ) {
          el.attr('md-svg-src', './'+images[attr.svg]);
        }
      }
    }
  }
}

export default ualIconDirective;
