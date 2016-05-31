import UalCheckboxModule from './ualCheckbox'
import UalCheckboxController from './ualCheckbox.controller';

describe('UalCheckbox', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalCheckboxModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalCheckboxController();
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
