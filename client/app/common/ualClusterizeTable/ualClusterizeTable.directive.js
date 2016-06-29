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
          clusterize && recompile();
        }
      }
    });

    // EMPTY DATA
    $('.clusterize-scroll .empty').html(attr.emptyMessage);

    // let onScroll = ctrl._compile(onScroll)($scope);
    $('.clusterize-scroll') .on( "scroll", () => {
      $scope.$apply(attr.onScroll);
    });

    // ADJUST COLUMNS HEADERS WIDTH
    let resize = (clazz, action) => {
      let header = $('#headersArea tr th.' + clazz);
      let style = (action === 'min') ? 'max-width' : 'min-width';

      let row = $('#contentArea tr td.' + clazz);
      if ( row.outerWidth() ) {
        let size = Math[action](header.outerWidth(), row.outerWidth());
        header.css(style, size+'px');
        row.css(style, size+'px');
      }
    }

    let scrollBarAdjust = () =>{
      let tableHeight = $('#scrollArea > table').height();
      let scrollAreaHeight = $('#scrollArea').height();
      //let scrollBarFix = tableHeight > scrollAreaHeight ? 'calc(100% + 20px)' : '100%';
      //$('#scrollArea').css('width',scrollBarFix);
    }

    // COMPILE ANGULAR ROWS
    let recompile = () => {
      let content_elem = angular.element(clusterize.content_elem);
      ctrl._compile(content_elem.contents())($scope);
      resize('-shrink', 'max');
      resize('-expand', 'min');
      scrollBarAdjust();
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
