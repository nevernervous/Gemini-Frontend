import UalReportFormModule from './ualReportForm'
import UalReportFormController from './ualReportForm.controller';

describe('UalReportForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportFormController();
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
