import $ from 'jquery';

class LoginFormController {
  /*@ngInject*/
  constructor(Session, Configuration, $state, $scope) {
    this.name = 'loginForm';
    this.mailto = Configuration.get('login.contact');
    this._session = Session;
    this.$state = $state;
    this.$scope = $scope;
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
    .then ( () => this.$state.go('dashboard.report-list'))
    .catch( response => this.error = response.data )
    .finally(() => {
      this.loading = false;
    });
  }
  onError(newValue, oldValue) {
    if ( newValue ) {
      $('login-form md-input-container').addClass('md-input-invalid');
    }
  }

  $onInit() {
    this.$scope.$watch(scope => scope.vm.error, this.onError);
  }

}

export default LoginFormController;
