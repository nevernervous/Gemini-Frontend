import UalReportListModule from './ualReportList'
import UalReportListController from './ualReportList.controller';

describe('UalReportList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportListController();
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
