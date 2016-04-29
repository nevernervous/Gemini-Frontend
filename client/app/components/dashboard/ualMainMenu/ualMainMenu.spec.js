import UalMainMenuModule from './ualMainMenu'
import UalMainMenuController from './ualMainMenu.controller';
import UalMainMenuComponent from './ualMainMenu.component';
import UalMainMenuTemplate from './ualMainMenu.html';

describe('UalMainMenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalMainMenuModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalMainMenuController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalMainMenuModule).to.have.property('name');
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
    const template = $('<ual-main-menu/>').html(UalMainMenuTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalMainMenuComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalMainMenuTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalMainMenuController);
      });
  });
});
