import SocketModule from './socket'
import SocketService from './socket.service';

describe('Socket', () => {
  
  beforeEach(window.module(SocketModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = SocketService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
