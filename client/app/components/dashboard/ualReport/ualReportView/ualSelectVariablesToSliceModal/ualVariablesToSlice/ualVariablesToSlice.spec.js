import UalVariablesToSliceModule from './ualVariablesToSlice'
import UalVariablesToSliceController from './ualVariablesToSlice.controller';

describe('UalVariablesToSlice', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesToSliceModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesToSliceController($rootScope);
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
