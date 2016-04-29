import angular from 'angular';
import 'angular-modal-service';
import ualModalComponent from './ualModal.component';
import ualModalFactory from './ualModal.factory';

let ualModalModule = angular.module('ualModal', [
  'angularModalService'
])

.factory('ualModal', ualModalFactory)
.component('ualModal', ualModalComponent);

export default ualModalModule;
