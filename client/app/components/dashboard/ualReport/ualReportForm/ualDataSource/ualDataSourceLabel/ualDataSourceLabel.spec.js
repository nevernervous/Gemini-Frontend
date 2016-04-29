import UalDataSourceLabelModule from './ualDataSourceLabel'
import UalDataSourceLabelController from './ualDataSourceLabel.controller';
import UalDataSourceLabelComponent from './ualDataSourceLabel.component';
import UalDataSourceLabelTemplate from './ualDataSourceLabel.html';

describe('UalDataSourceLabel', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalDataSourceLabelModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalDataSourceLabelController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalDataSourceLabelModule).to.have.property('name');
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
    const template = $('<ual-data-source-label/>').html(UalDataSourceLabelTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalDataSourceLabelComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalDataSourceLabelTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalDataSourceLabelController);
      });
  });
});
