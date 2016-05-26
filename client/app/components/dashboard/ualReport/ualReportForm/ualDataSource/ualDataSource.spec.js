import UalDataSourceModule from './ualDataSource'
import UalDataSourceController from './ualDataSource.controller';

describe('UalDataSource', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceController();
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
