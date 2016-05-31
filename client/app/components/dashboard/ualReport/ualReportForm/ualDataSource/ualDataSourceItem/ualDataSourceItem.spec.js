import UalDataSourceItemModule from './ualDataSourceItem'
import UalDataSourceItemController from './ualDataSourceItem.controller';

describe('UalDataSourceItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceItemController();
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
