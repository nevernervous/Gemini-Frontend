import angular from 'angular';
import LogoutModal from './logoutModal/logoutModal';
import ExpirationModal from './expirationModal/expirationModal';
import ualDataSource from './ualDataSource/ualDataSource';

let modalsModule = angular.module('modals', [
  LogoutModal.name,
  ExpirationModal.name,
  ualDataSource.name
])

export default modalsModule;
