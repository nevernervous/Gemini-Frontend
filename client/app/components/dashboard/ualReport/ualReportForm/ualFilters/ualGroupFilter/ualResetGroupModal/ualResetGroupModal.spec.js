import UalResetGroupModalModule from './ualResetGroupModal'
import UalResetGroupModalController from './ualResetGroupModal.controller';
import UalResetGroupModalComponent from './ualResetGroupModal.component';
import UalResetGroupModalTemplate from './ualResetGroupModal.html';

describe('UalResetGroupModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalResetGroupModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalResetGroupModalController();
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
