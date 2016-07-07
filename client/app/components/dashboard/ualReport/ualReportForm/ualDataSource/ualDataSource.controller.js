class UalDataSourceController {
  /*@ngInject*/

  constructor(
    // INTERNALS
    $timeout,
    // SERVICES
    DataSource,
    // COMPONENTS
    ualDataSourceChangeModal) {
    this.name = 'ualDataSource';

    // INTERNALS
    this.$timeout = $timeout;

    // SERVICES
    this.services = {
      datasource: DataSource
    }

    // COMPONENTS
    this.components = {
      change: ualDataSourceChangeModal
    }

    // STATE
    this.searchTerm;
    this.datasources;
    this.selected;
    this.groupsTotals = [];
  }

  // LIFECYCLE
  $onInit() {
    this.services.datasource.all()
      .then(response => {
        this.datasources = response.data;
        this.filterData();
      });
  }

  isActive(itemId) {
    return !!this.selected && !!this.selected.get() && this.selected.get().id === itemId;
  }

  isFirstInGroup(index) {
    let result = false;
    var currentItem = this.datasources[index];
    var previousItem = index >= 1 ? this.datasources[index - 1] : undefined;
    if (!previousItem || previousItem.group.groupId != currentItem.group.groupId) {
      result = true;
    }
    return result;
  }

  filterData() {
    this.$timeout(() => {
      this.total = 0;
      this.groupsTotals = [];
      _.forEach(this.datasources, (item) => {
        let noFilter = !this.searchTerm || _.isEmpty(this.searchTerm);
        let hasMatch = (!!this.searchTerm && !!item) && item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        item.show = noFilter || hasMatch;

        this.total  += sum;
        let groupId = item.group.groupId;

        let sum = item.show ? 1 : 0;
        let groupCount = this.groupsTotals[groupId] || 0;
        this.groupsTotals[groupId] = groupCount + sum;

      });
    }, 0);
  }

  hasValuesGroup(groupId){
    return this.groupsTotals[groupId] > 0;
  }

  selectedDataSource(item, ev) {
    this.hideTooltip();
    var datasourceOld = this.selected.get();
    var datasourceNew = item;
    if ( datasourceOld &&
       (!this.selected.equal(datasourceNew) && this.hasVariables) ) {

      this.components.change.open(datasourceNew, ev)
      .then( () => this.setDatasource(datasourceNew));

    } else {
      this.setDatasource(datasourceNew);
    }
  }

  setDatasource(item) {
    this.onChange();
    this.selected.set(item);
  }

  filterData() {
    this.$timeout(() => {
      this.total = 0;
      this.groupsTotals = [];
      _.forEach(this.datasources, (item) => {
        let noFilter = !this.searchTerm || _.isEmpty(this.searchTerm);
        let hasMatch = (!!this.searchTerm && !!item) && item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        item.show = noFilter || hasMatch;
        let sum = item.show ? 1 : 0;
        let groupId = item.group.groupId;
        this.total  += sum;
        let groupCount = this.groupsTotals[groupId] || 0;
        this.groupsTotals[groupId] = groupCount + sum;
      });
    }, 0);
  }

  hideTooltip() {
    //this._ualTooltipService.hide();
  }


}

export default UalDataSourceController;
