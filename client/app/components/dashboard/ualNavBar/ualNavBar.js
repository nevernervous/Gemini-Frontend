import angular from 'angular';
import ualNavBarService from './ualNavBar.service';
import ualNavBarComponent from './ualNavBar.component';
import ualUnsafeReportModal from '../ualUnsafeReportModal/ualUnsafeReportModal';
import ReportService from '../../../services/report/report';


let ualNavBarModule = angular.module('ualNavBar', [])

.factory('ualNavBar', ualNavBarService)
.component('ualNavBar', ualNavBarComponent);

export default ualNavBarModule;
