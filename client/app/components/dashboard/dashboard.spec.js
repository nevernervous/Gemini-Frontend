import DashboardModule from './dashboard'
import DashboardController from './dashboard.controller';
import DashboardComponent from './dashboard.component';
import DashboardTemplate from './dashboard.html';

describe('Dashboard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DashboardModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DashboardController($rootScope);
    };
  }));


  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
      controller.$onInit();
      console.log(controller._suscriptions.length)
      expect(controller._suscriptions.length).to.equal(4);
      //controller._suscriptions();
      controller._unsuscribe();
      console.log(controller._suscriptions.length);
      expect(controller._suscriptions.length).to.equal(0);
    });
  });

});
