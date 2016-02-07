import ReportModule from './report'
import ReportController from './report.controller';
import ReportComponent from './report.component';
import ReportTemplate from './report.html';

describe('Report', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ReportModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ReportController();
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
    const template = $('<report/>').html(ReportTemplate); 
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(template.children()).to.have.length(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ReportComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ReportTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ReportController);
      });
  });
});
