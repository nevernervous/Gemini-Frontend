import UalDropdownGroupModule from './ualDropdownGroup'
import UalDropdownGroupController from './ualDropdownGroup.controller';
import UalDropdownGroupComponent from './ualDropdownGroup.component';
import UalDropdownGroupTemplate from './ualDropdownGroup.html';

describe('UalDropdownGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDropdownGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDropdownGroupController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDropdownGroupModule).to.have.property('name');
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
    const template = $('<ual-dropdown-group/>').html(UalDropdownGroupTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDropdownGroupComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDropdownGroupTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDropdownGroupController);
      });
  });
});
