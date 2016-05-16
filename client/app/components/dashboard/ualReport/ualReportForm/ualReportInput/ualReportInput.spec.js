import UalReportInputModule from './ualReportInput'
import UalReportInputController from './ualReportInput.controller';
import UalReportInputComponent from './ualReportInput.component';
import UalReportInputTemplate from './ualReportInput.html';

describe('UalReportInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportInputModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportInputController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalReportInputModule).to.have.property('name');
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
    const template = $('<ual-report-input/>').html(UalReportInputTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalReportInputComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalReportInputTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalReportInputController);
      });
  });
});
