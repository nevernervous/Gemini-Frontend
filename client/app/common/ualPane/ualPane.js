import angular from 'angular';
import ualPaneComponent from './ualPane.component';

let ualPaneModule = angular.module('ualPane', [])

.component('ualPane', ualPaneComponent);

export default ualPaneModule;
