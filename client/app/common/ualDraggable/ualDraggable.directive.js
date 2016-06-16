import controller from './ualDraggable.controller';

class ualDraggableDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.controller = controller;
  }

  link(scope, element, attr, ctrl) {
    // this gives us the native JS object
    var el = element[0];

    el.draggable = false;

    let dragstart = function(e) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('Text', this.id);
      this.classList.add('drag');
      scope.$emit("DRAGGING.START");
      return false;
    }

    let dragend = function(e) {
      scope.$emit("DRAGGING.END");
      this.classList.remove('drag');
      return false;
    }

    let mouseover = function(e) {
      this.classList.add('-hovered');
    }
    let mouseout = function(e) {
      this.classList.remove('-hovered');
    }

    el.addEventListener('dragstart', dragstart, false);
    el.addEventListener('dragend', dragend, false);
    el.addEventListener('mouseover', mouseover, false);
    el.addEventListener('mouseout', mouseout, false);

  }
}

export default ualDraggableDirective;
