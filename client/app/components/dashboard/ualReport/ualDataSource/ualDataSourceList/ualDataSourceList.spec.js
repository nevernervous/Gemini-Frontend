import UalDataSourceListModule from './ualDataSourceList'
import UalDataSourceListController from './ualDataSourceList.controller';
import UalDataSourceListComponent from './ualDataSourceList.component';
import UalDataSourceListTemplate from './ualDataSourceList.html';

describe('UalDataSourceList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDataSourceListModule).to.have.property('name');
    });          
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    const template = $('<ual-data-source-list/>').html(UalDataSourceListTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDataSourceListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDataSourceListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDataSourceListController);
      });
  });
});
