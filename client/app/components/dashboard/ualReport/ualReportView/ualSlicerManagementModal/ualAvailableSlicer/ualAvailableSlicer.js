import angular from 'angular';
import ualAvailableSlicerComponent from './ualAvailableSlicer.component';
import ualSlicerMultipleSelect from './ualSlicerMultipleSelect/ualSlicerMultipleSelect';

let ualAvailableSlicerModule = angular.module('ualAvailableSlicer', [
  ualSlicerMultipleSelect.name
])

.component('ualAvailableSlicer', ualAvailableSlicerComponent)

export default ualAvailableSlicerModule;
