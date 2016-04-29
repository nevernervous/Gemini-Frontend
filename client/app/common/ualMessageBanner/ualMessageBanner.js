import angular from 'angular';
import ualMessageBannerComponent from './ualMessageBanner.component';

let ualMessageBannerModule = angular.module('ualMessageBanner', [
])

.component('ualMessageBanner', ualMessageBannerComponent);

export default ualMessageBannerModule;
