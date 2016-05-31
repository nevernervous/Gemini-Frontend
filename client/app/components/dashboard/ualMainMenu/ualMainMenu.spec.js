import UalMainMenuModule from './ualMainMenu'
import UalMainMenuController from './ualMainMenu.controller';
import UalMainMenuService from './ualMainMenu.service';

describe('UalMainMenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalMainMenuModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalMainMenuController(UalMainMenuService);
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
