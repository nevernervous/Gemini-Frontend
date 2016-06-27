import UalLinkModule from './ualLink'
import UalLinkController from './ualLink.controller';
import UalLinkComponent from './ualLink.component';
import UalLinkTemplate from './ualLink.html';

describe('UalLink', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalLinkModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalLinkController();
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
