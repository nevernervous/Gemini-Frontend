import angular from 'angular';
import ualGroupFilterComponent from './ualGroupFilter.component';
import ualRemoveGroupModal from './ualRemoveGroupModal/ualRemoveGroupModal';

let ualGroupFilterModule = angular.module('ualGroupFilter', [
  ualRemoveGroupModal.name
])

.component('ualGroupFilter', ualGroupFilterComponent);

export default ualGroupFilterModule;
