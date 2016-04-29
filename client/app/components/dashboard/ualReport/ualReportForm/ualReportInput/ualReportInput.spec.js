import UalReportInput2Module from './ualReportInput'
import UalReportInput2Controller from './ualReportInput.controller';
import UalReportInput2Component from './ualReportInput.component';
import UalReportInput2Template from './ualReportInput.html';

describe('UalReportInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportInput2Module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportInput2Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalReportInput2Module).to.have.property('name');
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
    const template = $('<ual-report-input/>').html(UalReportInput2Template);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalReportInput2Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalReportInput2Template);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalReportInput2Controller);
      });
  });
});
