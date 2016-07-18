import UalSlicerManagementModalModule from './ualSlicerManagementModal'
import UalSlicerManagementModalController from './ualSlicerManagementModal.controller';

describe('UalSlicerManagementModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalSlicerManagementModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalSlicerManagementModalController($rootScope);
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
