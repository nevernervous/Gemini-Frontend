import UalVariableItemModule from './ualVariableItem'
import UalVariableItemController from './ualVariableItem.controller';
import UalVariableItemComponent from './ualVariableItem.component';
import UalVariableItemTemplate from './ualVariableItem.html';

describe('UalVariableItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariableItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariableItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalVariableItemModule).to.have.property('name');
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
    const template = $('<ual-variable-item/>').html(UalVariableItemTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalVariableItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalVariableItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalVariableItemController);
      });
  });
});
