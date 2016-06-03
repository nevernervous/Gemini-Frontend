import UalFiltersModule from './ualFilters'
import UalFiltersController from './ualFilters.controller';
import UalFiltersComponent from './ualFilters.component';
import UalFiltersTemplate from './ualFilters.html';

describe('UalFilters', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalFiltersModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalFiltersController();
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
