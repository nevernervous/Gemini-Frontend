class DropdownMenuController {
  /*@ngInject*/
  constructor($state, logoutModal) {
    this.name = 'dropdownMenu';
    this._logoutModal = logoutModal;
    this._state = $state;
  }
  
  logout() { 
    this._logoutModal.open()
    .then( response => { 
      if ( response ) { 
        this._state.go('login');
      } 
    })
  }
}

export default DropdownMenuController;
