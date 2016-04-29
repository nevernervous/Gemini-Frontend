import ConfigurationModule from './configuration'
import ConfigurationService from './configuration.service';

describe('Configuration', () => {
  
  beforeEach(window.module(ConfigurationModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = ConfigurationService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
