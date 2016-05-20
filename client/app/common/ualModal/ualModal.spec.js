import ModalModule from './ualModal'
import ModalController from './ualModal.controller';

describe('Modal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ModalController();
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
