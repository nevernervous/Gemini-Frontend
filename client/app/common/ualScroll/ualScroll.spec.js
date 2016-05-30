import UalScrollModule from './ualScroll'

describe('UalScroll', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalScrollModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

});
