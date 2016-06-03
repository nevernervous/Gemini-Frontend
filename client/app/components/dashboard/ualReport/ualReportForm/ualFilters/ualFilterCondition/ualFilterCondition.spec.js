import UalFilterConditionModule from './ualFilterCondition'
import UalFilterConditionController from './ualFilterCondition.controller';
import UalFilterConditionComponent from './ualFilterCondition.component';
import UalFilterConditionTemplate from './ualFilterCondition.html';

describe('UalFilterCondition', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalFilterConditionModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalFilterConditionController();
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
