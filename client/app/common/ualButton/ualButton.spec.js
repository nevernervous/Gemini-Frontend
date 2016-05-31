import UalButtonModule from './ualButton'


describe('UalButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalButtonModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;

  }));

});
