import angular from 'angular';
import ualToastService from './ualToast.service';
import ualToastController from './ualToast.controller';

let ualToastModule = angular.module('ualToast', [])

.factory('ualToast', ualToastService)
.controller('ualToastController', ualToastController);

export default ualToastModule;
