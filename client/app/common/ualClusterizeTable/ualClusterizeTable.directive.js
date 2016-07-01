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
  }

  link($scope, elem, attr, ctrl) {
    // INIT CLUSTERIZE
    const clusterize = new Clusterize({
      rows: $scope.vm.rows,
      scrollId: 'scrollArea',
      contentId: 'contentArea',
      callbacks: {
        clusterChanged: function() {
          clusterize && recompile();
        }
      }
    });

    // EMPTY DATA
    $('.clusterize-scroll .empty').html(attr.emptyMessage);

    // TODO: Is this necesary ?
    // let onScroll = ctrl._compile(onScroll)($scope);
    // $('.clusterize-scroll') .on( "scroll", () => {
    //   $scope.$apply(attr.onScroll);
    // });

    // ADJUST COLUMNS HEADERS WIDTH
    const resize = () => {
      if ( $scope.vm.rows.length ) {
        const max = _.chain($('.ual-clusterize-table tr .cell-shrink span'))
          .map(cell => $(cell).outerWidth())
          .max()
          .value() + 36; // 36 px padding

        $('.ual-clusterize-table tr .cell-shrink').css('width', max + 'px');
      }
    }
    // TODO: Review scrollbars visualizarion
    // let scrollBarAdjust = () =>{
    //   let tableHeight = $('#scrollArea > table').height();
    //   let scrollAreaHeight = $('#scrollArea').height();
    //   //let scrollBarFix = tableHeight > scrollAreaHeight ? 'calc(100% + 20px)' : '100%';
    //   //$('#scrollArea').css('width',scrollBarFix);
    // }

    // COMPILE ANGULAR ROWS
    const recompile = () => {
      let content_elem = angular.element(clusterize.content_elem);
      ctrl.$compile(content_elem.contents())($scope);
      resize();
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
