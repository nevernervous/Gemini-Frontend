import UalDataSourceChangeModalModule from './ualDataSourceChangeModal'
import UalDataSourceChangeModalController from './ualDataSourceChangeModal.controller';

describe('UalDataSourceChangeModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceChangeModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceChangeModalController($rootScope );
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
