import UalExecutedReportModalModule from './ualExecutedReportModal'
import UalExecutedReportModalController from './ualExecutedReportModal.controller';
import UalExecutedReportModalComponent from './ualExecutedReportModal.component';
import UalExecutedReportModalTemplate from './ualExecutedReportModal.html';

describe('UalExecutedReportModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalExecutedReportModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalExecutedReportModalController();
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
