import UalAccordionModule from './ualAccordion'
import UalAccordionController from './ualAccordion.controller';
import UalAccordionDirective from './ualAccordion.directive';
import UalAccordionTemplate from './ualAccordion.html';

describe('UalAccordion', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAccordionModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAccordionController();
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
