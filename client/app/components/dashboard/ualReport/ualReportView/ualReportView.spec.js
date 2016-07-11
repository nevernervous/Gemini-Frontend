import UalReportViewModule from './ualReportView'
import UalReportViewController from './ualReportView.controller';
import UalReportViewComponent from './ualReportView.component';
import UalReportViewTemplate from './ualReportView.html';

describe('UalReportView', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportViewModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportViewController();
    };
  }));

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

});
