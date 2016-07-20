import UalButtonFlatModule from './ualButtonFlat'
import UalButtonFlatController from './ualButtonFlat.controller';
import UalButtonFlatComponent from './ualButtonFlat.component';
import UalButtonFlatTemplate from './ualButtonFlat.html';

describe('UalButtonFlat', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalButtonFlatModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalButtonFlatController();
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
