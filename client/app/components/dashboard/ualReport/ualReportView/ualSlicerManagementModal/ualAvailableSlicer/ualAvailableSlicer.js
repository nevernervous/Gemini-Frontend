import angular from 'angular';
import ualAvailableSlicerComponent from './ualAvailableSlicer.component';
import ualSelectedSlicer from './ualSelectedSlicer/ualSelectedSlicer';
import ualSlicerMultipleSelect from './ualSlicerMultipleSelect/ualSlicerMultipleSelect';

let ualAvailableSlicerModule = angular.module('ualAvailableSlicer', [
  ualSelectedSlicer.name,
  ualSlicerMultipleSelect.name
])

.component('ualAvailableSlicer', ualAvailableSlicerComponent)

export default ualAvailableSlicerModule;
