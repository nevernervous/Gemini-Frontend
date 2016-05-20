import UalVariablesCancelModalModule from './ualVariablesCancelModal'
import UalVariablesCancelModalController from './ualVariablesCancelModal.controller';

describe('UalVariablesCancelModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesCancelModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesCancelModalController($rootScope);
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
