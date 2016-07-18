import UalSelectedSlicerModule from './ualSelectedSlicer'
import UalSelectedSlicerController from './ualSelectedSlicer.controller';

describe('UalSelectedSlicer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalSelectedSlicerModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalSelectedSlicerController();
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
