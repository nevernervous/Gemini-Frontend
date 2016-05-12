import UalEllipsisModule from './ualEllipsis'
import UalEllipsisController from './ualEllipsis.controller';
import UalEllipsisComponent from './ualEllipsis.component';
import UalEllipsisTemplate from './ualEllipsis.html';

describe('UalEllipsis', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UalEllipsisModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UalEllipsisController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('has a name property [REMOVE]', () => {
      expect(UalEllipsisModule).to.have.property('name');
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
    const template = $('<ual-ellipsis/>').html(UalEllipsisTemplate);
    it('has at least one element [REMOVE]', () => {
      expect(template.children()).to.have.length.of.at.least(1);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UalEllipsisComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UalEllipsisTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UalEllipsisController);
      });
  });
});
