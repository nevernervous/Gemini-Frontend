import UalVariablesLayoutModule from './ualVariablesLayout'
import UalVariablesLayoutController from './ualVariablesLayout.controller';

describe('UalVariablesLayout', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesLayoutModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesLayoutController($rootScope);
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
