import angular from 'angular';
import ualAutocompleteItem from './ualAutocompleteItem/ualAutocompleteItem';
import ualAutocompleteComponent from './ualAutocomplete.component';


let ualAutocompleteModule = angular.module('ualAutocomplete', [
  ualAutocompleteItem.name
])

.component('ualAutocomplete', ualAutocompleteComponent);

export default ualAutocompleteModule;
