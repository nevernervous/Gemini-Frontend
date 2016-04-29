import $ from 'jquery';
import template from './ualClusterizeTable.html';
import controller from './ualClusterizeTable.controller';
import './ualClusterizeTable.scss';

class ualClusterizeTableDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.transclude = true;
    this.template = template;
    this.controller = controller;
    //this.controllerAs = 'vm';
  }

  link($scope, elem, attr, ctrl) {
    // INIT CLUSTERIZE
    let clusterize = new Clusterize({
      rows: $scope.vm.rows,
      scrollId: 'scrollArea',
      contentId: 'contentArea',
      callbacks: {
        clusterChanged: function() {
          clusterize && recompile();
        }
      }
    });
    // REWRITE getClusterNum METHOD to support custom scrollbar
    clusterize.getClusterNum = function () {
      this.options.scroll_top = this.options.scroll_top || 0; //this.scroll_elem.scrollTop;
      return Math.floor(this.options.scroll_top / (this.options.cluster_height - this.options.block_height)) || 0;
    };

    // INIT CUSTOM SCROLL
    let scroll = $('#scrollArea').mCustomScrollbar({
      theme:'dark',
      callbacks:{
        whileScrolling: function() {
          // SCROLL POSITION
          clusterize.options.scroll_top = parseInt(this.mcs.top) * -1;
          trigger('scroll', clusterize.scroll_elem);
        }
      }
    });

    // TRIGGER EVENT
    let trigger = (evt, elem) => {
      var evObj = document.createEvent('Events');
      evObj.initEvent(evt, true, false);
      elem.dispatchEvent(evObj);
    }

    // COMPILE ANGULAR ROWS
    let recompile = () => {
      let content_elem = angular.element(clusterize.content_elem);
      ctrl._compile(content_elem.contents())($scope);
    }

    // WATCH ROWS CHANGES
    $scope.$watch('vm.rows.length',  () => {
      clusterize.update($scope.vm.rows);
    });
    $scope.$watch('vm.rows',  () => {
      clusterize.update($scope.vm.rows);
    });


    recompile();
  }

}

export default ualClusterizeTableDirective;
