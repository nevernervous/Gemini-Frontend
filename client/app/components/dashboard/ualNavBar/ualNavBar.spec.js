import UalNavbarModule from './ualNavbar'
import UalNavbarController from './ualNavbar.controller';
import UalNavbarService from './ualNavbar.service';
import Report from '~/services/report/report.service';

const Properties = {
  endpoint: ''
}

describe('UalNavbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalNavbarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalNavbarController(Report(Properties), null, UalNavbarService());
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
