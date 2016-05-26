import UalTableModule from './ualTable'
import UalTableController from './ualTable.controller';

describe('UalTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalTableModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalTableController();
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
