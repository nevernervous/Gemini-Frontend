import $ from 'jquery';

class UalDataSourceController {
  /*@ngInject*/
  constructor($rootScope, ualDataSourceChangeModal, DataSource, ualDataSourceCancelModal, $filter, ualTooltipService, $timeout) {
    this._datasource = DataSource;
    this._cancelmodal = ualDataSourceCancelModal;
    this._filter = $filter;
    this._changemodal = ualDataSourceChangeModal;
    this._ualTooltipService = ualTooltipService;

    this._timeout = $timeout;

    this.searchTerm;
    this.datasources;
    this.rootScope = $rootScope;
    this.selected;
  }

  isActive(itemId) {
    return !!this.selected && !!this.selected.get() && this.selected.get().id === itemId;
  }

  selectedDataSource(item) {
    this.hideTooltip();
    var datasourceOld = this.selected.get();
    var datasourceNew = item;
    if (!!datasourceOld) {
      if (!this.selected.equal(datasourceNew) && this.hasVariables) {
        this._changemodal.open({ oldDataSource: datasourceOld, newDataSource: datasourceNew })
          .then(response => {
            if (response) {
              this.setDatasource(datasourceNew);
            }
          });
      } else {
        this.setDatasource(datasourceNew);
      }
    } else {
      this.setDatasource(datasourceNew);
    }

  }

  setDatasource(item) {
    this.onChange();
    this.selected.set(item);
  }

  filterData() {
    this._timeout(() => {
      this.total = 0;
      this.groups = _.map(this.datasources.groups, (group) => {
        let totalByGroup = 0;
        const filtered = _.forEach(group.items, (item) => {
          let noFilter = !this.searchTerm || _.isEmpty(this.searchTerm);
          let hasMatch = (!!this.searchTerm && !!item) && item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
          item.show = noFilter || hasMatch;
          totalByGroup += item.show ? 1 : 0;
        });
        this.total += totalByGroup;
        return {
          data: group.data,
          items: filtered,
          total: totalByGroup
        }
      });
    }, 0);
  }

  hideTooltip() {
    this._ualTooltipService.hide();
  }

  $onInit() {
    this._datasource.all('group')
      .then(response => {
        this.datasources = response.data;
        this.filterData();
      });
  }
}

export default UalDataSourceController;
