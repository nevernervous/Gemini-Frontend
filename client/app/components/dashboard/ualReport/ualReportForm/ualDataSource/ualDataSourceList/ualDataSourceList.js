import angular from 'angular';
import ualDataSourceListComponent from './ualDataSourceList.component';
import ualDataSourceItem from '../ualDataSourceItem/ualDataSourceItem';

let ualDataSourceListModule = angular.module('ualDataSourceList', [
    ualDataSourceItem.name
])

.component('ualDataSourceList', ualDataSourceListComponent);

export default ualDataSourceListModule;
