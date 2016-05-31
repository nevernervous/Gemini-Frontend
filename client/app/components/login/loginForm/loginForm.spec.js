import LoginFormModule from './loginForm'
import LoginFormController from './loginForm.controller';
import Session from '~/services/session/session.service';
import TokenService from '~/services/session/token.service';

const Configuration = {
  get: () => {}
}
const Properties = {
  endpoint: ''
}


describe('LoginForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginFormModule.name));
  beforeEach(inject((_$rootScope_, $window, $timeout) => {
    $rootScope = _$rootScope_;
    let Token = TokenService(Configuration, $rootScope, $window, $timeout);
    makeController = () => {
      return new LoginFormController(Session(Properties, Token), Configuration);
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
