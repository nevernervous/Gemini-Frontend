class LoginFormController {
  /*@ngInject*/
  constructor($state, Session, Configuration) {
    this.name = 'loginForm';
    this.mailto = Configuration.get('login.contact');
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
    .catch( response => this.error = response.data )
    .finally(() => {
      this.loading = false;
    });      
  }
}

export default LoginFormController;
