import UalTimepickerModule from './ualTimepicker'
import UalTimepickerController from './ualTimepicker.controller';
import UalTimepickerComponent from './ualTimepicker.component';
import UalTimepickerTemplate from './ualTimepicker.html';

describe('UalTimepicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalTimepickerModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalTimepickerController();
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
