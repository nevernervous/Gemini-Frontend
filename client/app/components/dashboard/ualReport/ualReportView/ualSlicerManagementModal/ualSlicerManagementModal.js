import angular from 'angular';
import ualSlicerManagementModalFactory from './ualSlicerManagementModal.factory';
import ualAvailableSlicer from './ualAvailableSlicer/ualAvailableSlicer';


let ualSlicerManagementModalModule = angular.module('ualSlicerManagementModal', [
  ualAvailableSlicer.name
])

.factory('ualSlicerManagementModal', ualSlicerManagementModalFactory);

export default ualSlicerManagementModalModule;


