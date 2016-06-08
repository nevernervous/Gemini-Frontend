import UalGroupFilterModule from './ualGroupFilter'
import UalGroupFilterController from './ualGroupFilter.controller';
import UalGroupFilterComponent from './ualGroupFilter.component';
import UalGroupFilterTemplate from './ualGroupFilter.html';

describe('UalGroupFilter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalGroupFilterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalGroupFilterController();
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
