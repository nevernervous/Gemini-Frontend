import LogoutModalModule from './logoutModal'
import LogoutModalController from './logoutModal.controller';
import LogoutModalComponent from './logoutModal.component';
import LogoutModalTemplate from './logoutModal.html';

describe('LogoutModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LogoutModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LogoutModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(LogoutModalModule).to.have.property('name');
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
    const template = $('<logout-modal/>').html(LogoutModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LogoutModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LogoutModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LogoutModalController);
      });
  });
});
