import UalVariablesGroupModule from './ualVariablesGroup'
import UalVariablesGroupController from './ualVariablesGroup.controller';
import UalVariablesGroupComponent from './ualVariablesGroup.component';
import UalVariablesGroupTemplate from './ualVariablesGroup.html';

describe('UalVariablesGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariablesGroupController();
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
