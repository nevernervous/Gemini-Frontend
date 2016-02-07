import NavOptionsModule from './navOptions'
import NavOptionsController from './navOptions.controller';
import NavOptionsComponent from './navOptions.component';
import NavOptionsTemplate from './navOptions.html';

describe('NavOptions', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavOptionsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavOptionsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(NavOptionsModule).to.have.property('name');
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
    const template = $('<nav-options/>').html(NavOptionsTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NavOptionsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavOptionsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavOptionsController);
      });
  });
});
