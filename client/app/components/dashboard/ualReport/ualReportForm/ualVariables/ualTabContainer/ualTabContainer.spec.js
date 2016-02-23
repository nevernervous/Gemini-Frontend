import UalTabContainerModule from './ualTabContainer'
import UalTabContainerController from './ualTabContainer.controller';
import UalTabContainerComponent from './ualTabContainer.component';
import UalTabContainerTemplate from './ualTabContainer.html';

describe('UalTabContainer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalTabContainerModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalTabContainerController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalTabContainerModule).to.have.property('name');
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
    const template = $('<ual-tab-container/>').html(UalTabContainerTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalTabContainerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalTabContainerTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalTabContainerController);
      });
  });
});
