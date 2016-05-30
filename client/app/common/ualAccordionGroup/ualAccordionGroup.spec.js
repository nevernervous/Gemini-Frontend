import UalAccordionGroupModule from './ualAccordionGroup'
import UalAccordionGroupController from './ualAccordionGroup.controller';

describe('UalAccordionGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAccordionGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAccordionGroupController();
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
