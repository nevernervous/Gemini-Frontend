import UalVariableSelectedItemModule from './ualVariableSelectedItem'
import UalVariableSelectedItemController from './ualVariableSelectedItem.controller';
import UalVariableSelectedItemComponent from './ualVariableSelectedItem.component';
import UalVariableSelectedItemTemplate from './ualVariableSelectedItem.html';

describe('UalVariableSelectedItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariableSelectedItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariableSelectedItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalVariableSelectedItemModule).to.have.property('name');
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
    const template = $('<ual-variable-selected-item/>').html(UalVariableSelectedItemTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalVariableSelectedItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalVariableSelectedItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalVariableSelectedItemController);
      });
  });
});
