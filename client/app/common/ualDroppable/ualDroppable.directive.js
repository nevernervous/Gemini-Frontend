import controller from './ualDroppable.controller';

class ualDroppableDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.scope = {
      drop: '&',
      dragover: '&',
      dragenter: '&',
      dragleave: '&',
      ualDisabled: '='
    };
    this.controller = controller;
  }

  link(scope, element, attr, ctrl) {
    // again we need the native object
    var el = element[0];

    let dragover = function(e) {
      e.dataTransfer.dropEffect = 'move';
      // allows us to drop
      if (e.preventDefault) e.preventDefault();
      this.classList.add('over');

      if ( scope.dragover() ) {
        var binId = this.id;
        scope.$apply(function(scope) {
          var fn = scope.dragover();
          if ('undefined' !== typeof fn) {
            fn(binId);
          }
        });
      }
      return false;
    }

    let dragenter = function(e) {
      if (e.preventDefault) e.preventDefault();
      this.classList.add('over');

      if ( scope.dragenter() ) {
        var binId = this.id;
        scope.$apply(function(scope) {
          var fn = scope.dragenter();
          if ('undefined' !== typeof fn) {
            fn(binId);
          }
        });
      }
      return false;
    }

    let drop = function(e) {
      // Stops some browsers from redirecting.
      if(e.preventDefault) { e.preventDefault(); }
      if(e.stopPropagation) { e.stopPropagation(); }
      this.classList.remove('over');

      var binId = this.id;
      var item = document.getElementById(e.dataTransfer.getData('Text'));
      // this.appendChild(item);
      // call the passed drop function
      scope.$apply(function(scope) {
        var fn = scope.drop;
        if ('undefined' !== typeof fn) {
          fn({ from: item.id, to: binId });
        }
      });
      return false;
    }

    let dragleave = function(e) {
      if (e.preventDefault) e.preventDefault();
      this.classList.remove('over');

      if ( scope.dragleave() ) {
        var binId = this.id;
        scope.$apply(function(scope) {
          var fn = scope.dragleave();
          if ('undefined' !== typeof fn) {
            fn(binId);
          }
        });
      }
      return false;
    }

    scope.$watch('ualDisabled', function(ualDisabled) {
      if (!ualDisabled) {
        el.addEventListener('dragover', dragover, false);
        el.addEventListener('dragenter', dragenter, false);
        el.addEventListener('dragleave', dragleave, false);
        el.addEventListener('drop', drop, false);
      } else {
        el.classList.remove('over');
        el.removeEventListener('dragover', dragover);
        el.removeEventListener('dragenter', dragenter);
        el.removeEventListener('dragleave', dragleave);
        el.removeEventListener('drop', drop);
      }
    });
  }
}

export default ualDroppableDirective;
