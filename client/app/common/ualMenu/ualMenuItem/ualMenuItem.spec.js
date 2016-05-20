import UalMenuModule from '../ualMenu'
import UalMenuItemController from './ualMenuItem.controller';

describe('UalMenuItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalMenuModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalMenuItemController();
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
