import $ from 'jquery';

class LoginFormController {
  /*@ngInject*/
  constructor($state, Session, Configuration) {
    this.name = 'loginForm';
    this.mailto = Configuration.get('login.contact');
    this._session = Session;
    this._state = $state;
    this.loading = false;
    this.error = false;

    this.user = Session.get() ? Session.get().username : null;
  }

  submit() {
    // Change focus to emulate IE behaviour
    $('login-form-submit').focus();

    this.error = false;
    this.loading = true;
    this._session.login(this.user, this.pass)
    .then ( () => this._state.go('dashboard.report-list'))
    .catch( response => this.error = response.data )
    .finally(() => {
      this.loading = false;
    });
  }
}

export default LoginFormController;
