import UalAvailableSlicerModule from './ualAvailableSlicer'
import UalAvailableSlicerController from './ualAvailableSlicer.controller';

describe('UalAvailableSlicer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAvailableSlicerModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAvailableSlicerController($rootScope);
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
