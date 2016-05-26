import UalVariablesMultiSelectModule from './ualVariablesMultiSelect'
import UalVariablesMultiSelectController from './ualVariablesMultiSelect.controller';
import UalVariablesMultiSelectComponent from './ualVariablesMultiSelect.component';
import UalVariablesMultiSelectTemplate from './ualVariablesMultiSelect.html';

describe('UalVariablesMultiSelect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesMultiSelectModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesMultiSelectController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalVariablesMultiSelectModule).to.have.property('name');
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
    const template = $('<ual-variables-multi-select/>').html(UalVariablesMultiSelectTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalVariablesMultiSelectComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalVariablesMultiSelectTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalVariablesMultiSelectController);
      });
  });
});
