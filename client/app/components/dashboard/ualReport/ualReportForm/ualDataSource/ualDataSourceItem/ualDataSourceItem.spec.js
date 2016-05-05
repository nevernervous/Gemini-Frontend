import UalDataSourceItemModule from './ualDataSourceItem'
import UalDataSourceItemController from './ualDataSourceItem.controller';
import UalDataSourceItemComponent from './ualDataSourceItem.component';
import UalDataSourceItemTemplate from './ualDataSourceItem.html';

describe('UalDataSourceItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDataSourceItemModule).to.have.property('name');
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
    const template = $('<ual-data-source-item/>').html(UalDataSourceItemTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDataSourceItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDataSourceItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDataSourceItemController);
      });
  });
});
