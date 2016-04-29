import UalDataSourceGroupModule from './ualDataSourceGroup'
import UalDataSourceGroupController from './ualDataSourceGroup.controller';
import UalDataSourceGroupComponent from './ualDataSourceGroup.component';
import UalDataSourceGroupTemplate from './ualDataSourceGroup.html';

describe('UalDataSourceGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceGroupController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDataSourceGroupModule).to.have.property('name');
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
    const template = $('<ual-data-source-group/>').html(UalDataSourceGroupTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDataSourceGroupComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDataSourceGroupTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDataSourceGroupController);
      });
  });
});
