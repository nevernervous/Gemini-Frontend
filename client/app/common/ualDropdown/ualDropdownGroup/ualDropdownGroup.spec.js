import UalDropdownGroupModule from './ualDropdownGroup'
import UalDropdownGroupController from './ualDropdownGroup.controller';

describe('UalDropdownGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDropdownGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDropdownGroupController();
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
