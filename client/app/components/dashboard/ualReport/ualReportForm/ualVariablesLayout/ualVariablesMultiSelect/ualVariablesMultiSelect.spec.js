import UalVariablesMultiSelectModule from './ualVariablesMultiSelect'
import UalVariablesMultiSelectController from './ualVariablesMultiSelect.controller';


describe('UalVariablesMultiSelect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesMultiSelectModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesMultiSelectController($rootScope);
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
