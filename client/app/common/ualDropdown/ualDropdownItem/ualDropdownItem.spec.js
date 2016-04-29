import UalDropdownItemModule from './ualDropdownItem'
import UalDropdownItemController from './ualDropdownItem.controller';
import UalDropdownItemComponent from './ualDropdownItem.component';
import UalDropdownItemTemplate from './ualDropdownItem.html';

describe('UalDropdownItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDropdownItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDropdownItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDropdownItemModule).to.have.property('name');
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
    const template = $('<ual-dropdown-item/>').html(UalDropdownItemTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDropdownItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDropdownItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDropdownItemController);
      });
  });
});
