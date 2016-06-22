import './ualDialog.scss';

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
          .textContent(description)
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

  return {
    confirm
  };
};

export default ualDialogService;
