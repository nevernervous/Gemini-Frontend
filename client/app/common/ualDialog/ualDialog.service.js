import './ualDialog.scss';

// TODO: Close all dialogs on logout
let ualDialogService = function ($mdDialog) {
  "ngInject";

  const defaults = {
    ok: 'Yes',
    cancel: 'No',
    ariaLabel: 'Dialog Box',
    target: null
  }

  const confirm = (title, description = null, options = {}) => {
    options = _.defaults(options, defaults);
    const confirm = $mdDialog.confirm()
          .title(title)
          .htmlContent(description)
          .css('ual-dialog')
          .ariaLabel(defaults.ariaLabel)
          .targetEvent(options.target)
          .ok(options.ok)
          .cancel(options.cancel);

    const template = $(confirm._options.template);
    template.find('md-button:last-child').attr( 'ual-button', 'primary' );
    confirm._options.template = template[0].outerHTML;

    return $mdDialog.show(confirm);
  }

  const show = (options) => {
    return $mdDialog.show(options);
  }

  return {
    confirm,
    show
  };
};

export default ualDialogService;
