import UalDataSourceGroupModule from './ualDataSourceGroup'
import UalDataSourceGroupController from './ualDataSourceGroup.controller';

describe('UalDataSourceGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceGroupController();
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
