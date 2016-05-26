import UalDropdownItemModule from './ualDropdownItem'
import UalDropdownItemController from './ualDropdownItem.controller';

describe('UalDropdownItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDropdownItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDropdownItemController();
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
