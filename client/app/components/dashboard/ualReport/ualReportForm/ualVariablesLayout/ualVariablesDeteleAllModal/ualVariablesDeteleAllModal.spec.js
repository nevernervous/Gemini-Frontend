import UalVariablesDeteleAllModalModule from './ualVariablesDeteleAllModal'
import UalVariablesDeteleAllModalController from './ualVariablesDeteleAllModal.controller';

describe('UalVariablesDeteleAllModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesDeteleAllModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesDeteleAllModalController($rootScope);
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
