class DropdownMenuController {
  /*@ngInject*/
  constructor(logoutModal) {
    this.name = 'dropdownMenu';
    this._logoutModal = logoutModal;
  }
  
  logout() { 
    this._logoutModal.open();
  }
}

export default DropdownMenuController;
