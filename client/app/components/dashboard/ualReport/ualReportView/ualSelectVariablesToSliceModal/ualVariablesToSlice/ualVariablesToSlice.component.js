import template from './ualVariablesToSlice.html';
import controller from './ualVariablesToSlice.controller';
import './ualVariablesToSlice.scss';

let ualVariablesToSliceComponent = {
  restrict: 'E',
  bindings: {
    variablesToSlice: "<",
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariablesToSliceComponent;
