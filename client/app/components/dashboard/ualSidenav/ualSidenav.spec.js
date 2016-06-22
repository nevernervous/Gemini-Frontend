import UalSidenavModule from './ualSidenav'
import UalSidenavController from './ualSidenav.controller';
import UalSidenavComponent from './ualSidenav.component';
import UalSidenavTemplate from './ualSidenav.html';

describe('UalSidenav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalSidenavModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalSidenavController();
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
