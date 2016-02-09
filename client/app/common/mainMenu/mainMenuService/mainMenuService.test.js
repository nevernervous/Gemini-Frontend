import MainMenuServiceModule from './mainMenuService'
import MainMenuServiceService from './mainMenuService.service';

describe('MainMenuService', () => {
  
  beforeEach(window.module(MainMenuServiceModule.name));

  describe('Service', () => {
    // component/directive specs
    let service = MainMenuServiceService();

    it('has no properties' ,() => {
      expect(service).to.be.empty;
    });

  });
});
