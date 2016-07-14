import angular from 'angular';
import ualSelectVariablesToSliceModalFactory from './ualSelectVariablesToSliceModal.factory';

let ualSelectVariablesToSliceModalModule = angular.module('ualSelectVariablesToSliceModal', [
])

.factory('ualSelectVariablesToSliceModal', ualSelectVariablesToSliceModalFactory);

export default ualSelectVariablesToSliceModalModule;


