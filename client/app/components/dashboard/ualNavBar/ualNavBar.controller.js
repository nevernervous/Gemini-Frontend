import user from './user.jpg';

class UalNavBarController {
  /*@ngInject*/
  constructor(ualMainMenu) {
    this.name = 'ualNavBar';
    this.user = user;
    
    this.toggleMenu = ualMainMenu.toggle;
  }
  
  
}

export default UalNavBarController;
