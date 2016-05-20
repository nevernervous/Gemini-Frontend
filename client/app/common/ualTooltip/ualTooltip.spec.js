import UalTooltipModule from './ualTooltip'

describe('UalTooltip', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalTooltipModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

});
