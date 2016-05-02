import UalClusterizeTableModule from './ualClusterizeTable'
import UalClusterizeTableController from './ualClusterizeTable.controller';
import UalClusterizeTableComponent from './ualClusterizeTable.component';
import UalClusterizeTableTemplate from './ualClusterizeTable.html';

describe('UalClusterizeTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalClusterizeTableModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalClusterizeTableController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalClusterizeTableModule).to.have.property('name');
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
    const template = $('<ual-clusterize-table/>').html(UalClusterizeTableTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalClusterizeTableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalClusterizeTableTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalClusterizeTableController);
      });
  });
});
