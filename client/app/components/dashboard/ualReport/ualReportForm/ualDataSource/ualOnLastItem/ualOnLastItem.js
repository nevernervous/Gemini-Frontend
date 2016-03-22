import angular from 'angular';
import ualOnLastItemDirective from './ualOnLastItem.directive';

let ualOnLastItemModule = angular.module('ualOnLastItem', [])

.directive('ualOnLastItem', () => new ualOnLastItemDirective());

export default ualOnLastItemModule;
