import UserModule from './user'
import UserService from './user.service';

describe('User', () => {
  
  beforeEach(window.module(UserModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = UserService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
