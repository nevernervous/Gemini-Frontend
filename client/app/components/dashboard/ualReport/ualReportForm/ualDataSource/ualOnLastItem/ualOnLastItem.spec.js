import UalOnLastItemModule from './ualOnLastItem'
import UalOnLastItemController from './ualOnLastItem.controller';
import UalOnLastItemComponent from './ualOnLastItem.component';
import UalOnLastItemTemplate from './ualOnLastItem.html';

describe('UalOnLastItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalOnLastItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalOnLastItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalOnLastItemModule).to.have.property('name');
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
    const template = $('<ual-on-last-item/>').html(UalOnLastItemTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalOnLastItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalOnLastItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalOnLastItemController);
      });
  });
});
