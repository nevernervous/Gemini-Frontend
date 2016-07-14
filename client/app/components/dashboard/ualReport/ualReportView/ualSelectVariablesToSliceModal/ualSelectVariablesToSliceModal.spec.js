import UalSelectVariablesToSliceModalModule from './ualSelectVariablesToSliceModal'
import UalSelectVariablesToSliceModalController from './ualSelectVariablesToSliceModal.controller';

describe('UalSelectVariablesToSliceModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalSelectVariablesToSliceModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalSelectVariablesToSliceModalController($rootScope);
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
