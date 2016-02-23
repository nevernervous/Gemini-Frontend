import angular from 'angular';
import 'angular-modal-service';
import modalComponent from './modal.component';
import modalFactory from './modal.factory';

let modalModule = angular.module('modal', [
  'angularModalService'
])

.factory('modal', modalFactory)
.component('ualModal', modalComponent);

export default modalModule;
