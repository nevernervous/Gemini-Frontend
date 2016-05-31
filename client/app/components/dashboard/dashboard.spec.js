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

    it('check initial state', () => { // erase if removing this.name from the controller
      let controller = makeController();
      controller.$onInit();
      expect(controller).to.have.property('name');
      expect(controller._suscriptions.length).to.equal(4);
    });

    it('unsuscribe all events', () => {
      let controller = makeController();
      controller.$onInit();
      controller._unsuscribe();
      expect(controller._suscriptions.length).to.equal(0);
    })

  });

});
