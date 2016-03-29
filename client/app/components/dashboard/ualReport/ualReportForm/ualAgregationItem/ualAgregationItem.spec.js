import UalAgregationItemModule from './ualAgregationItem'
import UalAgregationItemController from './ualAgregationItem.controller';
import UalAgregationItemComponent from './ualAgregationItem.component';
import UalAgregationItemTemplate from './ualAgregationItem.html';

describe('UalAgregationItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalAgregationItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalAgregationItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalAgregationItemModule).to.have.property('name');
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
    const template = $('<ual-agregation-item/>').html(UalAgregationItemTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalAgregationItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalAgregationItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalAgregationItemController);
      });
  });
});
