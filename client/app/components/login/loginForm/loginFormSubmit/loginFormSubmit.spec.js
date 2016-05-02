import LoginFormSubmitModule from './loginFormSubmit'
import LoginFormSubmitController from './loginFormSubmit.controller';
import LoginFormSubmitComponent from './loginFormSubmit.component';
import LoginFormSubmitTemplate from './loginFormSubmit.html';

describe('LoginFormSubmit', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginFormSubmitModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginFormSubmitController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(LoginFormSubmitModule).to.have.property('name');
    });     
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    const template = $('<login-input-submit/>').html(LoginFormSubmitTemplate);
    it('has name in template [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    }); 
  });

  describe('Component', () => {
      // component/directive specs
      let component = LoginFormSubmitComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LoginFormSubmitTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LoginFormSubmitController);
      });
  });
});
