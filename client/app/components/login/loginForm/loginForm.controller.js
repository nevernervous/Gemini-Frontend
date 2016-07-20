import $ from 'jquery';

class LoginFormController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $state,
    $scope,
    // SERVICES
    Session,
    Configuration,
    // COMPONENTS
    ualToast) {
    this.name = 'loginForm';

    // INTERNALS
    this.$state = $state;
    this.$scope = $scope;

    // SERVICES
    this.services = {
      session: Session
    }

    // COMPONENTS
    this.components = {
      toast: ualToast
    }

    // STATE
    this.loading = false;
    this.error = false;
    this.mailto = Configuration.get('login.contact');
    this.user = Session.get() ? Session.get().username : null;
  }

  submit() {
    // Change focus to emulate IE behaviour
    $('login-form-submit').focus();

    // HIDE TOAST
    this.components.toast.close();

    this.error = false;
    this.loading = true;
    this.services.session.login(this.user, this.pass)
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
