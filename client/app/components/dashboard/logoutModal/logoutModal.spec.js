import LogoutModalModule from './logoutModal'
import LogoutModalController from './logoutModal.controller';

describe('LogoutModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LogoutModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LogoutModalController($rootScope);
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
