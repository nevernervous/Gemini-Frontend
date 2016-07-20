import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualReportInput from './ualReportInput/ualReportInput';
import ualDataSource from './ualDataSource/ualDataSource';
import ualVariables from './ualVariables/ualVariables';
import ualFilters from './ualFilters/ualFilters';
import ualReportNameModal from './ualReportNameModal/ualReportNameModal';

import ualReportFormComponent from './ualReportForm.component';

let ualReportFormModule = angular.module('ualReportForm', [
  uiRouter,
  ualReportInput.name,
  ualDataSource.name,
  ualVariables.name,
  ualFilters.name,
  // MODALS
  ualReportNameModal.name
])

.component('ualReportForm', ualReportFormComponent);

export default ualReportFormModule
