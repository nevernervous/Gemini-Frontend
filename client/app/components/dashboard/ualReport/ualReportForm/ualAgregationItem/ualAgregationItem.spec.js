import UalAgregationItemModule from './ualAgregationItem'
import UalAgregationItemController from './ualAgregationItem.controller';

describe('UalAgregationItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAgregationItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAgregationItemController();
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
