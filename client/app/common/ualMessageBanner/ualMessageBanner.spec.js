import ualMessageBannerModule from './ualMessageBanner'
import ualMessageBannerController from './ualMessageBanner.controller';
import ualMessageBannerComponent from './ualMessageBanner.component';
import ualMessageBannerTemplate from './ualMessageBanner.html';

describe('ualMessageBanner', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ualMessageBannerModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ualMessageBannerController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      expect(ualMessageBannerModule).to.have.property('name');
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
    const template = $('<ual-message-banner/>').html(ualMessageBannerTemplate);
    it('has name in template [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    }); 
  });

  describe('Component', () => {
      // component/directive specs
      let component = ualMessageBannerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ualMessageBannerTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ualMessageBannerController);
      });
  });
});
