import angular from 'angular';

import ualDatepickerInput from './ualDatepickerInput/ualDatepickerInput';
import ualCalendarMonthBody from './ualCalendarMonthBody/ualCalendarMonthBody';

let ualDatepickerModule = angular.module('ualDatepicker', [
  ualDatepickerInput.name,
  ualCalendarMonthBody.name
])
// .config(['$mdDateLocaleProvider', function($mdDateLocaleProvider) {
//   //unicornLauncherProvider.useTinfoilShielding(true);
//   $mdDateLocaleProvider.monthHeaderFormatter = (date) => {
//     return   '<md-button class="prev md-icon-button" ' +
//         'aria-label="Prev">' +
//         '<md-icon md-font-icon="Ionicons" ' +
//           'class="ion-ios-arrow-left">' +
//         '</md-icon>' +
//       '</md-button>' +
//       '<div> {{ ctrl.date.getMonth() }} {{ ctrl.date.getFullYear() }}  </div>' +
//       '<md-button class="next md-icon-button" ' +
//         'aria-label="Next">' +
//         '<md-icon md-font-icon="Ionicons" ' +
//           'class="ion-ios-arrow-right">' +
//         '</md-icon>' +
//       '</md-button>';
//   }
// }]);

export default ualDatepickerModule;
