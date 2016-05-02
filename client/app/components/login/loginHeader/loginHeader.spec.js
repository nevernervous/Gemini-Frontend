import LoginHeaderModule from './loginHeader'
import LoginHeaderController from './loginHeader.controller';
import LoginHeaderComponent from './loginHeader.component';
import LoginHeaderTemplate from './loginHeader.html';

describe('LoginHeader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginHeaderModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginHeaderController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      expect(LoginHeaderModule).to.have.property('name');
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
    const template = $('<login-header/>').html(LoginHeaderTemplate);
    it('has name in template [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });     
  });

  describe('Component', () => {
      // component/directive specs
      let component = LoginHeaderComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LoginHeaderTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LoginHeaderController);
      });
  });
});
