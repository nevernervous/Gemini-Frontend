import angular from 'angular';
import ualAutocompleteItem from './ualAutocompleteItem/ualAutocompleteItem';
import ualAutoComponent from './ualAuto.component';


let ualAutoModule = angular.module('ualAuto', [
  ualAutocompleteItem.name
])

.component('ualAuto', ualAutoComponent);

export default ualAutoModule;
