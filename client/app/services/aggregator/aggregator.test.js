import AggregatorModule from './aggregator'
import AggregatorService from './aggregator.service';

describe('Aggregator', () => {
  
  beforeEach(window.module(AggregatorModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = AggregatorService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
