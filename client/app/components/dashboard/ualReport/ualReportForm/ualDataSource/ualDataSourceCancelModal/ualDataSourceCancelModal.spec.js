import UalDataSourceCancelModalModule from './ualDataSourceCancelModal'
import UalDataSourceCancelModalController from './ualDataSourceCancelModal.controller';
import UalDataSourceCancelModalComponent from './ualDataSourceCancelModal.component';
import UalDataSourceCancelModalTemplate from './ualDataSourceCancelModal.html';

describe('UalDataSourceCancelModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceCancelModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceCancelModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDataSourceCancelModalModule).to.have.property('name');
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
    const template = $('<ual-data-source-cancel-modal/>').html(UalDataSourceCancelModalTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDataSourceCancelModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDataSourceCancelModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDataSourceCancelModalController);
      });
  });
});
