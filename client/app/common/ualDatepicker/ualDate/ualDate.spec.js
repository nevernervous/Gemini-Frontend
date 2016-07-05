import UalDateModule from './ualDate'
import UalDateController from './ualDate.controller';
import UalDateComponent from './ualDate.component';
import UalDateTemplate from './ualDate.html';

describe('UalDate', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDateModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDateController();
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
