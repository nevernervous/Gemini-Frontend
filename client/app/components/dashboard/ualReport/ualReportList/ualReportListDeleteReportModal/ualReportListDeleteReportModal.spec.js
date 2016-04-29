import UalReportListDeleteReportModalModule from './ualReportListDeleteReportModal'
import UalReportListDeleteReportModalController from './ualReportListDeleteReportModal.controller';
import UalReportListDeleteReportModalComponent from './ualReportListDeleteReportModal.component';
import UalReportListDeleteReportModalTemplate from './ualReportListDeleteReportModal.html';

describe('UalReportListDeleteReportModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportListDeleteReportModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportListDeleteReportModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalReportListDeleteReportModalModule).to.have.property('name');
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
    const template = $('<ual-report-list-delete-report-modal/>').html(UalReportListDeleteReportModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalReportListDeleteReportModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalReportListDeleteReportModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalReportListDeleteReportModalController);
      });
  });
});
