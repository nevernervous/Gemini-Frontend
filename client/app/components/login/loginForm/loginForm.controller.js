class LoginFormController {
  /*@ngInject*/
  constructor($state, Session) {
    this.name = 'loginForm';
    this.mailto = 'GRP-pds-production-support@united.com';
    this._session = Session;
    this._state = $state;
    this.loading = false;
    this.error = false;
  }
  
  submit(form) {
    this.error = false; 
    this.loading = true;
    this._session.login(this.user, this.pass)
    .then ( () => this._state.go('dashboard.report'))
    .catch( () => this.error = true )
    .finally(() => {
      this.loading = false;
    });      
  }
}

export default LoginFormController;
