import template from './ualVariablesToSliceMultiSelect.html';
import controller from './ualVariablesToSliceMultiSelect.controller';
import './ualVariablesToSliceMultiSelect.scss';

let ualVariablesToSliceMultiSelectComponent = {
  restrict: 'E',
  bindings: {
    selectedReference: "=",
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariablesToSliceMultiSelectComponent;
