import angular from 'angular';
import ualDataSourceComponent from './ualDataSource.component';
import ualDataSourceCancelModal from './ualDataSourceCancelModal/ualDataSourceCancelModal';
import ualDataSourceGroup from './ualDataSourceGroup/ualDataSourceGroup';
import ualDataSourceLabel from './ualDataSourceLabel/ualDataSourceLabel';
import ualTooltipService from '../../../../../common/ualTooltip/ualTooltip.service';

let ualDataSourceModule = angular.module('ualDataSource', [
  ualDataSourceCancelModal.name,
  ualDataSourceGroup.name,
  ualDataSourceLabel.name
])
.component('ualDataSource', ualDataSourceComponent)
.factory('ualTooltipService',ualTooltipService);

export default ualDataSourceModule;
