import UalDateValidatorModule from './ualDateValidator'
import UalDateValidatorController from './ualDateValidator.controller';

describe('UalDateValidator', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDateValidatorModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDateValidatorController();
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
