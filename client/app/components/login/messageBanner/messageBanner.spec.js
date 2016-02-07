import MessageBannerModule from './messageBanner'
import MessageBannerController from './messageBanner.controller';
import MessageBannerComponent from './messageBanner.component';
import MessageBannerTemplate from './messageBanner.html';

describe('MessageBanner', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MessageBannerModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MessageBannerController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      expect(MessageBannerModule).to.have.property('name');
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
    const template = $('<message-banner/>').html(MessageBannerTemplate);
    it('has name in template [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    }); 
  });

  describe('Component', () => {
      // component/directive specs
      let component = MessageBannerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MessageBannerTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MessageBannerController);
      });
  });
});
