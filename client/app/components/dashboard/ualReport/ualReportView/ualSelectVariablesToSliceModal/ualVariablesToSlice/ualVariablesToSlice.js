import angular from 'angular';
import ualVariablesToSliceComponent from './ualVariablesToSlice.component';
import ualVariablesToSliceSelectedItem from './ualVariablesToSliceSelectedItem/ualVariablesToSliceSelectedItem';
import ualVariablesToSliceMultiSelect from './ualVariablesToSliceMultiSelect/ualVariablesToSliceMultiSelect';

let ualVariablesToSliceModule = angular.module('ualVariablesToSlice', [
  ualVariablesToSliceSelectedItem.name,
  ualVariablesToSliceMultiSelect.name
])

.component('ualVariablesToSlice', ualVariablesToSliceComponent)

export default ualVariablesToSliceModule;
