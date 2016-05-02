import UalScrollModule from './ualScroll'
import UalScrollController from './ualScroll.controller';
import UalScrollComponent from './ualScroll.component';
import UalScrollTemplate from './ualScroll.html';

describe('UalScroll', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalScrollModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalScrollController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalScrollModule).to.have.property('name');
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
    const template = $('<ual-scroll/>').html(UalScrollTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalScrollComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalScrollTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalScrollController);
      });
  });
});
