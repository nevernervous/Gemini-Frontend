import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualDataSource from './ualDataSource/ualDataSource';
import ualVariables from './ualVariablesLayout/ualVariablesLayout';
import ualReportFormComponent from './ualReportForm.component';
import ualAgregationItem from './ualAgregationItem/ualAgregationItem';
import ualReportInput from './ualReportInput/ualReportInput';
import ualReportNameModal from './ualReportNameModal/ualReportNameModal';
import ualUnsafeReportModal from '../../ualUnsafeReportModal/ualUnsafeReportModal';
import ualFilters from './ualFilters/ualFilters';
import ualTimerModal from './ualTimerModal/ualTimerModal';
import ualExecuteReportModal from './ualTimerModal/ualTimerModal';


let ualReportFormModule = angular.module('ualReportForm', [
  uiRouter,
  ualVariables.name,
  ualReportInput.name,
  ualFilters.name,
  // MODALS
  ualDataSource.name,
  ualAgregationItem.name,
  ualReportNameModal.name,
  ualUnsafeReportModal.name,
  ualTimerModal.name
])
.component('ualReportForm', ualReportFormComponent);

export default ualReportFormModule
