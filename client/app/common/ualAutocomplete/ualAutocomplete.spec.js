import UalAutocompleteModule from './ualAutocomplete'
import UalAutocompleteController from './ualAutocomplete.controller';
import UalAutocompleteComponent from './ualAutocomplete.component';
import UalAutocompleteTemplate from './ualAutocomplete.html';

describe('UalAutocomplete', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAutocompleteModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAutocompleteController();
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
