import angular from 'angular';
import ualNavbarDirective from './ualNavbar.directive';
import ualUnsafeReportModal from '../ualUnsafeReportModal/ualUnsafeReportModal';
import ReportService from '../../../services/report/report';

let ualNavbarModule = angular.module('ualNavbar', [])

.directive('ualNavbar', () => new ualNavbarDirective());

export default ualNavbarModule;
