class UalReportViewController {
  /*@ngInject*/
  constructor(
    // COMPONENTS
    ualSlicerManagementModal
  ) {
    this.name = 'ualReportView';

    // MODALS
    this._ualSlicerManagementModal=ualSlicerManagementModal;
  }

  addToSlicers(){
    this._ualSlicerManagementModal.open({
      report: null
    }).then(
      response => {

      }
    );
  }


}

export default UalReportViewController;
