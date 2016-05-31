import UalReportListDeleteReportModalModule from './ualReportListDeleteReportModal'
import UalReportListDeleteReportModalController from './ualReportListDeleteReportModal.controller';

describe('UalReportListDeleteReportModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportListDeleteReportModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportListDeleteReportModalController($rootScope);
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
