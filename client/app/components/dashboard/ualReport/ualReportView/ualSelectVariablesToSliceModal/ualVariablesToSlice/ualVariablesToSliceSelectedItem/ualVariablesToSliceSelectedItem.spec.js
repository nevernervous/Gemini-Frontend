import UalVariablesToSliceSelectedItemModule from './ualVariablesToSliceSelectedItem'
import UalVariablesToSliceSelectedItemController from './ualVariablesToSliceSelectedItem.controller';

describe('UalVariablesToSliceSelectedItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesToSliceSelectedItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesToSliceSelectedItemController();
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
