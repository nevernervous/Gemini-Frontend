import angular from 'angular';
import ualAutocompleteComponent from './ualAutocomplete.component';

let ualAutocompleteModule = angular.module('ualAutocomplete', [])

.component('ualAutocomplete', ualAutocompleteComponent);

export default ualAutocompleteModule;
