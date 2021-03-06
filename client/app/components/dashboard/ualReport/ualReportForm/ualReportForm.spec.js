import UalReportFormModule from './ualReportForm'
import UalReportFormController from './ualReportForm.controller';
import UalReportFormComponent from './ualReportForm.component';
import UalReportFormTemplate from './ualReportForm.html';

describe('UalReportForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportFormController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    const template = $('<ual-report-form/>').html(UalReportFormTemplate); 
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(template.children()).to.have.length(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalReportFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalReportFormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalReportFormController);
      });
  });
});
