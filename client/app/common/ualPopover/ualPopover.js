import angular from 'angular';
import ualPopoverDirective from './ualPopover.directive';
import ualPopoverService from './ualPopover.service';

let ualPopoverModule = angular.module('ualPopover', [])

.factory('ualPopover', ualPopoverService)
.directive('ualPopover', () => new ualPopoverDirective());

export default ualPopoverModule;

//More Info: https://github.com/FauzanKhan/angular-popover/blob/master/src/js/ngPopover.js
