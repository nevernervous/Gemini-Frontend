import UalDropdownModule from './ualDropdown'
import UalDropdownController from './ualDropdown.controller';

describe('UalDropdown', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDropdownModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDropdownController();
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
