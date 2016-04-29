import UalUnsafeReportModalModule from './ualUnsafeReportModal'
import UalUnsafeReportModalController from './ualUnsafeReportModal.controller';
import UalUnsafeReportModalComponent from './ualUnsafeReportModal.component';
import UalUnsafeReportModalTemplate from './ualUnsafeReportModal.html';

describe('UalUnsafeReportModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalUnsafeReportModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalUnsafeReportModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalUnsafeReportModalModule).to.have.property('name');
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
    const template = $('<ual-unsafe-report-modal/>').html(UalUnsafeReportModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalUnsafeReportModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalUnsafeReportModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalUnsafeReportModalController);
      });
  });
});
