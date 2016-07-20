import template from './ualDataSourceChangeModal.html';
import controller from './ualDataSourceChangeModal.controller';
import './ualDataSourceChangeModal.scss';

let ualDataSourceChangeModalService = function (ualDialog) {
  "ngInject";
  const components = {
    dialog: ualDialog
  }

  const open = (newDataSource, event) => {

    return components.dialog.show({
      targetEvent: event,
      template: template,
      controller: controller,
      controllerAs : 'vm',
      clickOutsideToClose: false,
      locals: {
        datasource: newDataSource
      }
    })
  }

  return { open };
};

export default ualDataSourceChangeModalService;
