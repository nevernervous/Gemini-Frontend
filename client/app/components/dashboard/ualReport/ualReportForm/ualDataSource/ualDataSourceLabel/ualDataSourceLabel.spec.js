import UalDataSourceLabelModule from './ualDataSourceLabel'
import UalDataSourceLabelController from './ualDataSourceLabel.controller';

describe('UalDataSourceLabel', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceLabelModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceLabelController();
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
