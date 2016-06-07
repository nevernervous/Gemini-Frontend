import UalInputModule from './ualInput'

describe('UalInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalInputModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

});
