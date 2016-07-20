import UalVariablesModule from './ualVariables'
import UalVariablesController from './ualVariables.controller';

describe('UalVariables', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesController($rootScope);
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
