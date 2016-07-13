import UalAutocompleteItemModule from './ualAutocompleteItem'
import UalAutocompleteItemController from './ualAutocompleteItem.controller';
import UalAutocompleteItemComponent from './ualAutocompleteItem.component';
import UalAutocompleteItemTemplate from './ualAutocompleteItem.html';

describe('UalAutocompleteItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAutocompleteItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAutocompleteItemController();
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
