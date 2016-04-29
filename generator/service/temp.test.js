import <%= upCaseName %>Module from './<%= name %>'
import <%= upCaseName %>Service from './<%= name %>.service';

describe('<%= upCaseName %>', () => {
  
  beforeEach(window.module(<%= upCaseName %>Module.name));

  describe('Service', () => {
    // component/directive specs
    let service = <%= upCaseName %>Service();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
