import UalVariablesModule from './ualVariables'
import UalVariablesController from './ualVariables.controller';
import DataSource from '~/services/datasource/datasource.service';
import ServicesTransform from '~/services/services.transform';

const Properties = {
  endpoint: ''
}

describe('UalVariables', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalVariablesModule.name));
  beforeEach(inject((_$rootScope_, $http, $q) => {
    $rootScope = _$rootScope_;
    let Transform = ServicesTransform($http);
    makeController = () => {
      return new UalVariablesController(DataSource(Properties, $http, $q, Transform), $rootScope, {id: 1});
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
