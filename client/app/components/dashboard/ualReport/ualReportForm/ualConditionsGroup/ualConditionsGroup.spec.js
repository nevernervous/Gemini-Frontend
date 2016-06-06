import UalConditionsGroupModule from './ualConditionsGroup'
import UalConditionsGroupController from './ualConditionsGroup.controller';
import UalConditionsGroupComponent from './ualConditionsGroup.component';
import UalConditionsGroupTemplate from './ualConditionsGroup.html';

describe('UalConditionsGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalConditionsGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalConditionsGroupController();
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
