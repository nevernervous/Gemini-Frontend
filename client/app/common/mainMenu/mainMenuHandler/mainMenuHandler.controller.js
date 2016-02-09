class MainMenuHandlerController {
  /*@ngInject*/
  constructor(mainMenuService) {
    this.name = 'mainMenuHandler';
    this._mainMenuService = mainMenuService;
  }
  
  toggle() { 
    this._mainMenuService.toggle();
  }
}

export default MainMenuHandlerController;
