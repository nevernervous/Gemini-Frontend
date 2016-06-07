import UalLoadingModule from './ualLoading'
import UalLoadingController from './ualLoading.controller';
import UalLoadingComponent from './ualLoading.component';
import UalLoadingTemplate from './ualLoading.html';

describe('UalLoading', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalLoadingModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalLoadingController();
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
