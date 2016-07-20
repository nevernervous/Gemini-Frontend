import angular from 'angular';
import ualAutocompleteItemDirective from './ualAutocompleteItem.directive';

let ualAutocompleteItemModule = angular.module('ualAutocompleteItem', [])

.directive('ualAutocompleteItem', () => new ualAutocompleteItemDirective());

export default ualAutocompleteItemModule;
