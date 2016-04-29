import UalDataSourceChangeModalModule from './ualDataSourceChangeModal'
import UalDataSourceChangeModalController from './ualDataSourceChangeModal.controller';
import UalDataSourceChangeModalComponent from './ualDataSourceChangeModal.component';
import UalDataSourceChangeModalTemplate from './ualDataSourceChangeModal.html';

describe('UalDataSourceChangeModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceChangeModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceChangeModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDataSourceChangeModalModule).to.have.property('name');
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
    const template = $('<ual-data-source-change-modal/>').html(UalDataSourceChangeModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDataSourceChangeModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDataSourceChangeModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDataSourceChangeModalController);
      });
  });
});
