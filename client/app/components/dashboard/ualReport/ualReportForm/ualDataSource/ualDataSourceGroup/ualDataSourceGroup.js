import angular from 'angular';
import ualDataSourceGroupComponent from './ualDataSourceGroup.component';
import ualDataSourceItem from '../ualDataSourceItem/ualDataSourceItem';

let ualDataSourceListModule = angular.module('ualDataSourceGroup', [
    ualDataSourceItem.name
])

.component('ualDataSourceGroup', ualDataSourceGroupComponent);

export default ualDataSourceListModule;
