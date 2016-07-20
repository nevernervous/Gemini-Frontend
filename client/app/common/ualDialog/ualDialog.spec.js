import UalDialogModule from './ualDialog'
import UalDialogService from './ualDialog.service';

describe('UalDialog', () => {
  
  beforeEach(window.module(UalDialogModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = UalDialogService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
