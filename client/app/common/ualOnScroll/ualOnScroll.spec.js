import UalOnScrollModule from './ualOnScroll'
import UalOnScrollController from './ualOnScroll.controller';

describe('UalOnScroll', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalOnScrollModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalOnScrollController();
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
