class UalReportListController {
  /*@ngInject*/

  constructor(Report) {
    this.reports = null;
    this._reportService = Report;

    this.predicate = 'lastModificationDate';
    this.reverse = true;
  }

  $onInit() {
    this._reportService.all()
      .then(response => this.reports = response.data);
  }

  showTooltip(e){
    if (e){
      if (e.target.id != ""){
        console.log(e.target.nodeName);
      }
      //let tooltip = $("#"+e.target.id).first().next();
      //tooltip.prop("ual-tooltip-show", true);
    }
  }
  hideTooltip(){
    $(".-tooltip").removeClass("-show-tooltip");
    $("[ual-tooltip-show]").prop("ual-tooltip-show", false);
  }
}

export default UalReportListController;
