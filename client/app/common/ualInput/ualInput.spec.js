import UalInputModule from './ualInput'
import UalInputController from './ualInput.controller';

describe('UalInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalInputModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalInputController();
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
