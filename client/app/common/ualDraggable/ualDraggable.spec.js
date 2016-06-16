import UalDraggableModule from './ualDraggable'
import UalDraggableController from './ualDraggable.controller';
import UalDraggableComponent from './ualDraggable.component';
import UalDraggableTemplate from './ualDraggable.html';

describe('UalDraggable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDraggableModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDraggableController();
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
