import UalMenuitemModule from './ualMenuitem'
import UalMenuitemController from './ualMenuitem.controller';
import UalMenuitemComponent from './ualMenuitem.component';
import UalMenuitemTemplate from './ualMenuitem.html';

describe('UalMenuitem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalMenuitemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalMenuitemController();
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
