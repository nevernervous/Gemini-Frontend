import angular from 'angular';
import ualSelectVariablesToSliceModalFactory from './ualSelectVariablesToSliceModal.factory';
import ualVariablesToSlice from './ualVariablesToSlice/ualVariablesToSlice';


let ualSelectVariablesToSliceModalModule = angular.module('ualSelectVariablesToSliceModal', [
  ualVariablesToSlice.name
])

.factory('ualSelectVariablesToSliceModal', ualSelectVariablesToSliceModalFactory);

export default ualSelectVariablesToSliceModalModule;


