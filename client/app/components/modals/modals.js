import angular from 'angular';
import LogoutModal from './logoutModal/logoutModal';
import ExpirationModal from './expirationModal/expirationModal';

let modalsModule = angular.module('modals', [
  LogoutModal.name,
  ExpirationModal.name
])

export default modalsModule;
