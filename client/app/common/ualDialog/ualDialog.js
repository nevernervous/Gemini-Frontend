import angular from 'angular';
import ualDialogService from './ualDialog.service';

let ualDialogModule = angular.module('ualDialog', [])

.factory('ualDialog', ualDialogService);

export default ualDialogModule;
