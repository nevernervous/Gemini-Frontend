import UalReportInputModule from './ualReportInput'
import UalReportInputController from './ualReportInput.controller';

describe('UalReportInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalReportInputModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalReportInputController();
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
