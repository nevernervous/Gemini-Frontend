import ualSlicerMultipleSelectModule from './ualSlicerMultipleSelect'
import ualSlicerMultipleSelectController from './ualSlicerMultipleSelect.controller';


describe('ualSlicerMultipleSelect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ualSlicerMultipleSelectModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ualSlicerMultipleSelectController($rootScope);
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
