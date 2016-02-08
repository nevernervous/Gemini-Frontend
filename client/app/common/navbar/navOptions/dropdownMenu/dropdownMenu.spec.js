import DropdownMenuModule from './dropdownMenu'
import DropdownMenuController from './dropdownMenu.controller';
import DropdownMenuComponent from './dropdownMenu.component';
import DropdownMenuTemplate from './dropdownMenu.html';

describe('DropdownMenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DropdownMenuModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DropdownMenuController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(DropdownMenuModule).to.have.property('name');
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
    const template = $('<dropdown-menu/>').html(DropdownMenuTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DropdownMenuComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DropdownMenuTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DropdownMenuController);
      });
  });
});
