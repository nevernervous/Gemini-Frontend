import UalVariablesDeteleAllModalModule from './ualVariablesDeteleAllModal'
import UalVariablesDeteleAllModalController from './ualVariablesDeteleAllModal.controller';
import UalVariablesDeteleAllModalComponent from './ualVariablesDeteleAllModal.component';
import UalVariablesDeteleAllModalTemplate from './ualVariablesDeteleAllModal.html';

describe('UalVariablesDeteleAllModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesDeteleAllModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesDeteleAllModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalVariablesDeteleAllModalModule).to.have.property('name');
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
    const template = $('<ual-variables-detele-all-modal/>').html(UalVariablesDeteleAllModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalVariablesDeteleAllModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalVariablesDeteleAllModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalVariablesDeteleAllModalController);
      });
  });
});
