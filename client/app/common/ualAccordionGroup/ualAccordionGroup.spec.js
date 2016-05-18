import UalAccordionGroupModule from './ualAccordionGroup'
import UalAccordionGroupController from './ualAccordionGroup.controller';
import UalAccordionGroupComponent from './ualAccordionGroup.component';
import UalAccordionGroupTemplate from './ualAccordionGroup.html';

describe('UalAccordionGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAccordionGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAccordionGroupController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalAccordionGroupModule).to.have.property('name');
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
    const template = $('<ual-accordion-group/>').html(UalAccordionGroupTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalAccordionGroupComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalAccordionGroupTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalAccordionGroupController);
      });
  });
});
