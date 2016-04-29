import UalVariablesGroupModule from './ualVariablesGroup'
import UalVariablesGroupController from './ualVariablesGroup.controller';
import UalVariablesGroupComponent from './ualVariablesGroup.component';
import UalVariablesGroupTemplate from './ualVariablesGroup.html';

describe('UalVariablesGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesGroupController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalVariablesGroupModule).to.have.property('name');
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
    const template = $('<ual-variables-group/>').html(UalVariablesGroupTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalVariablesGroupComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalVariablesGroupTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalVariablesGroupController);
      });
  });
});
