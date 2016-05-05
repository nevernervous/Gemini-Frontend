import UalReportModalModule from './UalReportModal'
import UalReportModalController from './UalReportModal.controller';
import UalReportModalComponent from './UalReportModal.component';
import UalReportModalTemplate from './UalReportModal.html';

describe('UalReportModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalReportModalModule).to.have.property('name');
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
    const template = $('<ual-report-modal/>').html(UalReportModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalReportModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalReportModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalReportModalController);
      });
  });
});
