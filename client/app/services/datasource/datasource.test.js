import DatasourceModule from './datasource'
import DatasourceService from './datasource.service';

describe('Datasource', () => {
  
  beforeEach(window.module(DatasourceModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = DatasourceService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
