import UalVariableSelectedItemModule from './ualVariableSelectedItem'
import UalVariableSelectedItemController from './ualVariableSelectedItem.controller';

describe('UalVariableSelectedItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariableSelectedItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalVariableSelectedItemController();
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
