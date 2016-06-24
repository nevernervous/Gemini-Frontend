import UalRemoveGroupModalModule from './ualRemoveGroupModal'
import UalRemoveGroupModalController from './ualRemoveGroupModal.controller';
import UalRemoveGroupModalComponent from './ualRemoveGroupModal.component';
import UalRemoveGroupModalTemplate from './ualRemoveGroupModal.html';

describe('UalRemoveGroupModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalRemoveGroupModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalRemoveGroupModalController();
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
