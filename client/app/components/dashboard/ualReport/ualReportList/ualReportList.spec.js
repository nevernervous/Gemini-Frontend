import UalReportListModule from './ualReportList'
import UalReportListController from './ualReportList.controller';
import UalReportListComponent from './ualReportList.component';
import UalReportListTemplate from './ualReportList.html';

describe('UalReportList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportListController();
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
    const template = $('<ual-report-list/>').html(UalReportListTemplate); 
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(template.children()).to.have.length(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalReportListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalReportListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalReportListController);
      });
  });
});
