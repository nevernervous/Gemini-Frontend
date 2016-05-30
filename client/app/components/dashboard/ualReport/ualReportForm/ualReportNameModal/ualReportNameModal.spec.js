import UalReportNameModalModule from './ualReportNameModal'
import UalReportNameModalController from './ualReportNameModal.controller';

describe('UalReportNameModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportNameModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportNameModalController($rootScope);
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
