import UalDropdownModule from './ualDropdown'
import UalDropdownController from './ualDropdown.controller';
import UalDropdownComponent from './ualDropdown.component';
import UalDropdownTemplate from './ualDropdown.html';

describe('UalDropdown', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDropdownModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDropdownController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDropdownModule).to.have.property('name');
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
    const template = $('<ual-dropdown/>').html(UalDropdownTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDropdownComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDropdownTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDropdownController);
      });
  });
});
