import angular from 'angular';
import ualDatepickerInputDirective from './ualDatepickerInput.directive';

let ualDatepickerInputModule = angular.module('ualDatepickerInput', [])

.directive('ualDatepickerInput', () => new ualDatepickerInputDirective());

export default ualDatepickerInputModule;
