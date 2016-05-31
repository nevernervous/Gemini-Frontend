import UalTabsModule from './ualTabs'
import UalTabsController from './ualTabs.controller';

describe('UalTabs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalTabsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalTabsController();
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
