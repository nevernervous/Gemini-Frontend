import UalMessageBanner2Module from './ualMessageBanner'
import UalMessageBanner2Controller from './ualMessageBanner.controller';
import UalMessageBanner2Component from './ualMessageBanner.component';
import UalMessageBanner2Template from './ualMessageBanner.html';

describe('UalMessageBanner', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalMessageBanner2Module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalMessageBanner2Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalMessageBanner2Module).to.have.property('name');
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
    const template = $('<ual-message-banner/>').html(UalMessageBanner2Template);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalMessageBanner2Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalMessageBanner2Template);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalMessageBanner2Controller);
      });
  });
});
