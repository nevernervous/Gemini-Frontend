import UalListitemModule from './ualListitem'
import UalListitemController from './ualListitem.controller';
import UalListitemComponent from './ualListitem.component';
import UalListitemTemplate from './ualListitem.html';

describe('UalListitem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalListitemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalListitemController();
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
