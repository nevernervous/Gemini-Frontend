import UalTimerModalModule from './ualTimerModal'
import UalTimerModalController from './ualTimerModal.controller';

describe('UalTimerModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalTimerModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalTimerModalController($rootScope);
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
