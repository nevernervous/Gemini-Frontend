import UalLabelCountModule from './ualLabelCount'
import UalLabelCountController from './ualLabelCount.controller';
import UalLabelCountComponent from './ualLabelCount.component';
import UalLabelCountTemplate from './ualLabelCount.html';

describe('UalLabelCount', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalLabelCountModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalLabelCountController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalLabelCountModule).to.have.property('name');
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
    const template = $('<ual-label-count/>').html(UalLabelCountTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalLabelCountComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalLabelCountTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalLabelCountController);
      });
  });
});
