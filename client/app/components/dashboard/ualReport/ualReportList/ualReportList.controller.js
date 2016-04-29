class UalReportListController {
  /*@ngInject*/

  constructor(Report, $interval) {
    this.reports = null;
    this._reportService = Report;

    this.predicate = 'lastModificationDate';
    this.reverse = true;
    this._interval = $interval;

    this.rows = [];
  }

  order(param) {
    let rows = [];
    for (var i = 50; i > 0; i--) {
        rows.push('<tr><td ng-click="vm.clickme(' + i + ')">' + i + '</td></tr>');
    }
    console.log("REORDER: " + param);
    this.rows = rows;
  }

  clickme(i) {
    console.log(i)
    // i ++;
    // let total = i + 10;
    // for (i; i < total; i++) {
    //     this.rows.push('<tr><td ng-click="vm.clickme(' + i + ')">' + i + '</td></tr>');
    // }
  }

  $onInit() {
    this._reportService.all()
      .then(response => this.reports = response.data);

    // let i = 1;
    // this._interval(() => {
    //   console.log(i);
    //   this.rows.push('<tr><td ng-click="vm.clickme(' + i + ')">' + i + '</td></tr>');
    //   i++;
    // }, 5000);

    for (var i = 1; i < 51; i++) {
        this.rows.push('<tr><td ng-click="vm.clickme(' + i + ')">' + i + '</td></tr>');
    }
  }
}

export default UalReportListController;

