import angular from 'angular';
import ualButtonFlatDirective from './ualButtonFlat.directive';

let ualButtonFlatModule = angular.module('ualButtonFlat', [])

.directive('ualButtonFlat', () => new ualButtonFlatDirective());

export default ualButtonFlatModule;
