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
    this.loading = true;
    this.searchTerm;
    this.datasources;
    this.selected;
  }

  // LIFECYCLE
  $onInit() {
    this.services.datasource.all()
    .then(response => {
      this.loading = false;
      this.datasources = response.data;
    });
  }

  // FILTER
  isFirstInGroup(index) {
    const currentItem = this.datasources[index];
    const previousItem = index >= 1 ? this.datasources[index - 1] : undefined;
    return (!previousItem || previousItem.group.groupId != currentItem.group.groupId)
  }

  // SELECT
  isActive(itemId) {
    return !!this.selected && !!this.selected.get() && this.selected.get().id === itemId;
  }
  selectedDataSource(item, ev) {
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
}

export default UalDataSourceController;
