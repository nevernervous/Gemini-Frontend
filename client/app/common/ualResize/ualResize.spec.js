import UalResizeModule from './ualResize'
import UalResizeController from './ualResize.controller';

describe('UalResize', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalResizeModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalResizeController();
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
