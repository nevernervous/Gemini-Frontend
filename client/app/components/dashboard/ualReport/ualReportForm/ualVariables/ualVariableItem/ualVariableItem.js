import angular from 'angular';
import ualVariableItemComponent from './ualVariableItem.component';

let ualVariableItemModule = angular.module('ualVariableItem', [])

.component('ualVariableItem', ualVariableItemComponent);

export default ualVariableItemModule;
