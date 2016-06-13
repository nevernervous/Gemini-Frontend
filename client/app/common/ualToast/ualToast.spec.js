import UalToastModule from './ualToast'
import UalToastService from './ualToast.service';

describe('UalToast', () => {
  
  beforeEach(window.module(UalToastModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = UalToastService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
