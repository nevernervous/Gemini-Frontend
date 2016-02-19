import ReportContextModule from './reportContext'
import ReportContextService from './reportContext.service';

describe('ReportContext', () => {
  
  beforeEach(window.module(ReportContextModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = ReportContextService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
