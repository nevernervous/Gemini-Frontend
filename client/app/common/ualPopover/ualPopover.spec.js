import UalPopoverModule from './ualPopover'
import UalPopoverController from './ualPopover.controller';
import UalPopoverComponent from './ualPopover.component';
import UalPopoverTemplate from './ualPopover.html';

describe('UalPopover', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalPopoverModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalPopoverController();
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
