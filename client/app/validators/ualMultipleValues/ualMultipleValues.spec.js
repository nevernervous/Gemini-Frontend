import ualMultipleValuesModule from './ualMultipleValues'
import ualMultipleValuesController from './ualMultipleValues.controller';

describe('ualMultipleValues', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ualMultipleValuesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ualMultipleValuesController();
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
