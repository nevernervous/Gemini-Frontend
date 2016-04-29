import ReportModule from './report'
import ReportService from './report.service';

describe('Report', () => {
  
  beforeEach(window.module(ReportModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = ReportService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
