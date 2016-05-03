import angular from 'angular';
import ualDataSourceItemComponent from './ualDataSourceItem.component';
import ualTooltipService from '../../../../../../common/ualTooltip/ualTooltip.service';
let ualDataSourceItemModule = angular.module('ualDataSourceItem', [])

.component('ualDataSourceItem', ualDataSourceItemComponent)
.factory('ualTooltipService',ualTooltipService);

export default ualDataSourceItemModule;
