import UalDataSourceCancelModalModule from './ualDataSourceCancelModal'
import UalDataSourceCancelModalController from './ualDataSourceCancelModal.controller';

describe('UalDataSourceCancelModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceCancelModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceCancelModalController($rootScope);
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
