import angular from 'angular';
import ualClusterizeTableDirective from './ualClusterizeTable.directive';

let ualClusterizeTableModule = angular.module('ualClusterizeTable', [])

.directive('ualClusterizeTable', () => new ualClusterizeTableDirective());

export default ualClusterizeTableModule;
