// https://blog.parkji.co.uk/2013/08/11/native-drag-and-drop-in-angularjs.html
var app = angular.module('dragDrop', []);

app.directive('draggable', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      // this gives us the native JS object
      var el = element[0];

      el.draggable = false;

      let dragstart = function(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('Text', this.id);
        this.classList.add('drag');
        return false;
      }

      let dragend = function(e) {
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
});

app.directive('droppable', function() {
  return {
    restrict: 'A',
    scope: {
      drop: '&',
      dragover: '&',
      dragenter: '&',
      dragleave: '&',
      ualDisabled: '=',
      bind: '=',
      bin: '='
    },
    link: function(scope, element) {
      // again we need the native object
      var el = element[0],
      owner =  scope.bind ? scope.bind : this;

      let dragover = function(e) {
        e.dataTransfer.dropEffect = 'move';
        // allows us to drop
        if (e.preventDefault) e.preventDefault();
        this.classList.add('over');

        if ( scope.dragover() ) {
          var binId = this.id;
          scope.$apply(function(scope) {
            var fn = scope.dragover().bind(owner);
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
            var fn = scope.dragenter().bind(owner);
            if ('undefined' !== typeof fn) {
              fn(binId);
            }
          });
        }
        return false;
      }

      let drop = function(e) {
        // Stops some browsers from redirecting.
        if (e.stopPropagation) e.stopPropagation();
        this.classList.remove('over');

        var binId = this.id;
        var item = document.getElementById(e.dataTransfer.getData('Text'));
        // this.appendChild(item);
        // call the passed drop function
        scope.$apply(function(scope) {
          var fn = scope.drop().bind(owner);
          if ('undefined' !== typeof fn) {
            fn(item.id, binId, scope.bin);
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
            var fn = scope.dragleave().bind(owner);
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
});
