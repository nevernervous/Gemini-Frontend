import UalRender from './ualRender'

describe('UalRender', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalRender.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

});
