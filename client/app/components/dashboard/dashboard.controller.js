class DashboardController {
  constructor() {
    this.name = 'dashboard';
    this.menuOpen = false;
  }
  
  toggleMenu() { 
    this.menuOpen = !this.menuOpen;
  }
}

export default DashboardController;
