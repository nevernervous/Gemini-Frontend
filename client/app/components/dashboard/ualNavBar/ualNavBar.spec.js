import UalNavBarModule from './ualNavBar'
import UalNavBarController from './ualNavBar.controller';
import UalNavBarService from './ualNavBar.service';
import Report from '~/services/report/report.service';
import UalMainMenu from '~/components/dashboard/ualMainMenu/ualMainMenu.service';

const Properties = {
  endpoint: ''
}

describe('UalNavBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalNavBarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalNavBarController(Report(Properties), UalMainMenu(), UalNavBarService());
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
