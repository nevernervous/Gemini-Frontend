// https://blog.parkji.co.uk/2013/08/11/native-drag-and-drop-in-angularjs.html
var app = angular.module('dragDrop', []);

app.directive('draggable', function() {
  return function(scope, element) {
    // this gives us the native JS object
    var el = element[0];

    el.draggable = false;

    el.addEventListener(
      'dragstart',
      function(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('Text', this.id);
        this.classList.add('drag');
        return false;
      },
      false
    );

    el.addEventListener(
      'dragend',
      function(e) {
        this.classList.remove('drag');
        return false;
      },
      false
    );

    // ngMouseOver
    el.onmouseover = function() {
      this.classList.add('-hovered');
    };
    el.onmouseout = function() {
      this.classList.remove('-hovered');
    };

  }
});

app.directive('droppable', function() {
  return {
    scope: {
      drop: '&',
      dragover: '&',
      dragenter: '&',
      dragleave: '&',
      actionDisabled: '=',
      bind: '=',
      bin: '='
    },
    link: function(scope, element) {
      // again we need the native object
      var el = element[0],
      owner =  scope.bind ? scope.bind : this;

      el.addEventListener(
        'dragover',
        function(e) {
          e.dataTransfer.dropEffect = 'move';
          // allows us to drop
          if (e.preventDefault) e.preventDefault();
          this.classList.add('over');

          if ( !scope.actionDisabled && scope.dragover() ) {
            var binId = this.id;
            scope.$apply(function(scope) {
              var fn = scope.dragover().bind(owner);
              if ('undefined' !== typeof fn) {
                fn(binId);
              }
            });
          }
          return false;
        },
        false
      );

      el.addEventListener(
        'dragenter',
        function(e) {
          if (e.preventDefault) e.preventDefault();
          this.classList.add('over');

          if ( !scope.actionDisabled && scope.dragenter() ) {
            var binId = this.id;
            scope.$apply(function(scope) {
              var fn = scope.dragenter().bind(owner);
              if ('undefined' !== typeof fn) {
                fn(binId);
              }
            });
          }
          return false;
        },
        false
      );

      el.addEventListener(
        'dragleave',
        function(e) {
          if (e.preventDefault) e.preventDefault();
          this.classList.remove('over');

          if ( !scope.actionDisabled && scope.dragleave() ) {
            var binId = this.id;
            scope.$apply(function(scope) {
              var fn = scope.dragleave().bind(owner);
              if ('undefined' !== typeof fn) {
                fn(binId);
              }
            });
          }
          return false;
        },
        false
      );

      el.addEventListener(
        'drop',
        function(e) {
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
        },
        false
      );
    }
  }
});
