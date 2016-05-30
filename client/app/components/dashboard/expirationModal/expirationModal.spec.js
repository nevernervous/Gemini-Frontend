import ExpirationModalModule from './expirationModal'
import ExpirationModalController from './expirationModal.controller';

describe('ExpirationModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ExpirationModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ExpirationModalController($rootScope);
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
