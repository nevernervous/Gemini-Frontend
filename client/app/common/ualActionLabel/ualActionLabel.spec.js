import UalActionLabelModule from './ualActionLabel'
import UalActionLabelController from './ualActionLabel.controller';
import UalActionLabelComponent from './ualActionLabel.component';
import UalActionLabelTemplate from './ualActionLabel.html';

describe('UalActionLabel', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalActionLabelModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalActionLabelController();
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
