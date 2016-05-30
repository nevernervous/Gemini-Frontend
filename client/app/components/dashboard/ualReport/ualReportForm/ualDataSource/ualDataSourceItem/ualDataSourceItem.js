import angular from 'angular';
import ualDataSourceItemComponent from './ualDataSourceItem.component';
let ualDataSourceItemModule = angular.module('ualDataSourceItem', [])

.component('ualDataSourceItem', ualDataSourceItemComponent);

export default ualDataSourceItemModule;
