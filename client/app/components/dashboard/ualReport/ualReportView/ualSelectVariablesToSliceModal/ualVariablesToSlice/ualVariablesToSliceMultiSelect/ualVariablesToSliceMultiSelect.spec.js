import UalVariablesToSliceMultiSelectModule from './ualVariablesToSliceMultiSelect'
import UalVariablesToSliceMultiSelectController from './ualVariablesToSliceMultiSelect.controller';


describe('UalVariablesToSliceMultiSelect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesToSliceMultiSelectModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesToSliceMultiSelectController($rootScope);
    };
  }));

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });


});
