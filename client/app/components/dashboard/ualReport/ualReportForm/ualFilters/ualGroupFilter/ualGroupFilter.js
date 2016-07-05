import angular from 'angular';
import ualGroupFilterComponent from './ualGroupFilter.component';
import ualRemoveGroupModal from './ualRemoveGroupModal/ualRemoveGroupModal';
import ualResetGroupModal from './ualResetGroupModal/ualResetGroupModal';

let ualGroupFilterModule = angular.module('ualGroupFilter', [
  ualRemoveGroupModal.name,
  ualResetGroupModal.name
])

.component('ualGroupFilter', ualGroupFilterComponent);

export default ualGroupFilterModule;
