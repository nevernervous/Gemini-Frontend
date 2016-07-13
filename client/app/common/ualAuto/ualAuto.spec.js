import UalAutoModule from './ualAuto'
import UalAutoController from './ualAuto.controller';
import UalAutoComponent from './ualAuto.component';
import UalAutoTemplate from './ualAuto.html';

describe('UalAuto', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAutoModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAutoController();
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
