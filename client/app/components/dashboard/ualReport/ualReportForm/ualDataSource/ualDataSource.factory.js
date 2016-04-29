import template from './ualDataSource.html';
import controller from './ualDataSource.controller';
import './ualDataSource.scss';

let ualDataSourceService = function (ualModal, DataSource) {
  "ngInject";

  let open = (inputs) => {
    // DI
    inputs.DataSourceService = DataSource;

    // OPEN
    return ualModal.open({
      template: '<ual-modal class="-fullmodal ual-data-source">' + template + '</ual-modal>',
      controller: controller,
      controllerAs : 'vm',
      inputs: inputs
    })
  }

  return { open };
};

export default ualDataSourceService;
