import UalUnsafeReportModalModule from './ualUnsafeReportModal'
import UalUnsafeReportModalController from './ualUnsafeReportModal.controller';

describe('UalUnsafeReportModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalUnsafeReportModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalUnsafeReportModalController($rootScope);
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
