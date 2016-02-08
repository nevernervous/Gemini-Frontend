import angular from 'angular';
import menuItemComponent from './menuItem.component';

let menuItemModule = angular.module('menuItem', [])

.component('menuItem', menuItemComponent);

export default menuItemModule;
