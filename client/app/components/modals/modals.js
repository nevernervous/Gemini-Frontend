import angular from 'angular';
import LogoutModal from './logoutModal/logoutModal';

let modalsModule = angular.module('modals', [
  LogoutModal.name
])

export default modalsModule;
