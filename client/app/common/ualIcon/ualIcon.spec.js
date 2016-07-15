import UalIconModule from './ualIcon'
import UalIconController from './ualIcon.controller';
import UalIconComponent from './ualIcon.component';
import UalIconTemplate from './ualIcon.html';

describe('UalIcon', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalIconModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalIconController();
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
