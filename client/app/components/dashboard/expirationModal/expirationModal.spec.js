import ExpirationModalModule from './expirationModal'
import ExpirationModalController from './expirationModal.controller';
import ExpirationModalComponent from './expirationModal.component';
import ExpirationModalTemplate from './expirationModal.html';

describe('ExpirationModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ExpirationModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ExpirationModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(ExpirationModalModule).to.have.property('name');
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
    const template = $('<expiration-modal/>').html(ExpirationModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ExpirationModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ExpirationModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ExpirationModalController);
      });
  });
});
