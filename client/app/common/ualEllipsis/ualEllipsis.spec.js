import UalEllipsisModule from './ualEllipsis'
import UalEllipsisController from './ualEllipsis.controller';

describe('UalEllipsis', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalEllipsisModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalEllipsisController();
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
