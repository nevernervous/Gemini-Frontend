import UalDatepickerModule from './ualDatepicker'
import UalDatepickerController from './ualDatepicker.controller';
import UalDatepickerComponent from './ualDatepicker.component';
import UalDatepickerTemplate from './ualDatepicker.html';

describe('UalDatepicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDatepickerModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDatepickerController();
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
