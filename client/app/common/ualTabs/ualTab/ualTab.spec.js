import UalTabModule from './ualTab'

describe('UalTab', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalTabModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;

  }));

});
