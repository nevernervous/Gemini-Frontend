import UalSearchFilterModule from './ualSearchFilter'
import UalSearchFilterController from './ualSearchFilter.controller';
import UalSearchFilterComponent from './ualSearchFilter.component';
import UalSearchFilterTemplate from './ualSearchFilter.html';

describe('UalSearchFilter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalSearchFilterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalSearchFilterController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalSearchFilterModule).to.have.property('name');
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
    const template = $('<ual-search-filter/>').html(UalSearchFilterTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalSearchFilterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalSearchFilterTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalSearchFilterController);
      });
  });
});
