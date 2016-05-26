import LoginModule from './login'
import LoginController from './login.controller';
import TokenService from '~/services/session/token.service';

const Configuration = {
  get: () => {}
}

describe('Login', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginModule.name));
  beforeEach(inject((_$rootScope_, $window, $timeout) => {
    $rootScope = _$rootScope_;
    let Token = TokenService(Configuration, $rootScope, $window, $timeout);
    makeController = () => {
      return new LoginController(Token);
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
