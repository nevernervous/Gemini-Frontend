import UalNavBarModule from './ualNavBar'
import UalNavBarController from './ualNavBar.controller';
import UalNavBarComponent from './ualNavBar.component';
import UalNavBarTemplate from './ualNavBar.html';

describe('UalNavBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalNavBarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalNavBarController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalNavBarModule).to.have.property('name');
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
    const template = $('<ual-nav-bar/>').html(UalNavBarTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalNavBarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalNavBarTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalNavBarController);
      });
  });
});
