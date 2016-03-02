import UalVariablesCancelModalModule from './ualVariablesCancelModal'
import UalVariablesCancelModalController from './ualVariablesCancelModal.controller';
import UalVariablesCancelModalComponent from './ualVariablesCancelModal.component';
import UalVariablesCancelModalTemplate from './ualVariablesCancelModal.html';

describe('UalVariablesCancelModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesCancelModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesCancelModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalVariablesCancelModalModule).to.have.property('name');
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
    const template = $('<ual-variables-cancel-modal/>').html(UalVariablesCancelModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalVariablesCancelModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalVariablesCancelModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalVariablesCancelModalController);
      });
  });
});
