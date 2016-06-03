import angular from 'angular';
import ualActionLabelComponent from './ualActionLabel.component';

let ualActionLabelModule = angular.module('ualActionLabel', [])

.component('ualActionLabel', ualActionLabelComponent);

export default ualActionLabelModule;
