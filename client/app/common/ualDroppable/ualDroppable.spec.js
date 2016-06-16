import UalDroppableModule from './ualDroppable'
import UalDroppableController from './ualDroppable.controller';
import UalDroppableComponent from './ualDroppable.component';
import UalDroppableTemplate from './ualDroppable.html';

describe('UalDroppable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDroppableModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDroppableController();
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
