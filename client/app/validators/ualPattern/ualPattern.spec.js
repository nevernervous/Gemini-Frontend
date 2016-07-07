import ualPatternModule from './ualPattern'
import ualPatternController from './ualPattern.controller';

describe('ualPattern', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ualPatternModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ualPatternController();
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
