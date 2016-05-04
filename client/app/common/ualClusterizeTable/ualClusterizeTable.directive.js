import $ from 'jquery';
import template from './ualClusterizeTable.html';
import controller from './ualClusterizeTable.controller';
import './ualClusterizeTable.scss';

class ualClusterizeTableDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.replace = true;
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
          clusterize && refresh();
        }
      }
    });

    // EMPTY DATA
    $('.clusterize-scroll .empty').html(attr.emptyMessage);

    // ADJUST COLUMNS HEADERS WIDTH
    let header = $('#headersArea tr th.-shrink');
    let shrinks = () => {
      let row = $('#contentArea tr td.-shrink');
      if ( row.outerWidth() ) {
        let max = Math.max(header.outerWidth(), row.outerWidth());
        header.css('min-width', max+'px');
        row.css('min-width', max+'px');
      }
    }
    // COMPILE ANGULAR ROWS
    let recompile = () => {
      let content_elem = angular.element(clusterize.content_elem);
      ctrl._compile(content_elem.contents())($scope);
    }

    // REFRESH
    let refresh = () => {
      recompile();
      shrinks();
    }

    // WATCH ROWS CHANGES
    $scope.$watch('vm.rows.length',  () => {
      clusterize.update($scope.vm.rows);
    });
    $scope.$watch('vm.rows',  () => {
      clusterize.update($scope.vm.rows);
    });

    refresh();
  }

}

export default ualClusterizeTableDirective;
