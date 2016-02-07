import angular from 'angular';
import messageBannerComponent from './messageBanner.component';

let messageBannerModule = angular.module('messageBanner', [
])

.component('messageBanner', messageBannerComponent);

export default messageBannerModule;
