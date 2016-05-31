import UalClusterizeTableModule from './ualClusterizeTable'
import UalClusterizeTableController from './ualClusterizeTable.controller';

describe('UalClusterizeTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalClusterizeTableModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalClusterizeTableController();
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
