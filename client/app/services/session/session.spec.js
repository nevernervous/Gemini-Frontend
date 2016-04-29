import SessionModule from './session'
import SessionService from './session.service';

describe('Session', () => {
  beforeEach(window.module(SessionModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = SessionService();

    it('has properties' ,() => {
      expect(service).not.to.be.empty;
    });

  });
});
