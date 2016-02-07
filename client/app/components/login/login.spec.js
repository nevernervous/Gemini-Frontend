import LoginModule from './login'
import LoginController from './login.controller';
import LoginComponent from './login.component';
import LoginTemplate from './login.html';

describe('Login', () => {
  let makeController;

  beforeEach(window.module(LoginModule.name));
      
  beforeEach(inject(($location) => {
    makeController = () => {
      return new LoginController($location);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(LoginModule).to.have.property('name');
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
    const template = $('<login/>').html(LoginTemplate); 
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(template.children()).to.have.length(2);
      template.should.have.descendants('message-banner');
      template.should.have.descendants('login-header');
      template.should.have.descendants('login-form');
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LoginComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LoginTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
        expect(component.controllerAs).to.equal('vm');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LoginController);
      });
  });
});
