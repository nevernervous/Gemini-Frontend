import UalMenuItemModule from './ualMenuItem'
import UalMenuItemController from './ualMenuItem.controller';
import UalMenuItemComponent from './ualMenuItem.component';
import UalMenuItemTemplate from './ualMenuItem.html';

describe('UalMenuItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalMenuItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalMenuItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalMenuItemModule).to.have.property('name');
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
    const template = $('<ual-menu-item/>').html(UalMenuItemTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalMenuItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalMenuItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalMenuItemController);
      });
  });
});
