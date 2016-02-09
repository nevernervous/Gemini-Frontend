class MainMenuController {
  /*@ngInject*/
  constructor(mainMenuService) {
    this.name = 'mainMenu';
    this._mainMenuService = mainMenuService;
  }
  
  toggle() { 
    this._mainMenuService.toggle();
  }
  isOpen() { 
    return this._mainMenuService.isOpen();
  }
}

export default MainMenuController;
