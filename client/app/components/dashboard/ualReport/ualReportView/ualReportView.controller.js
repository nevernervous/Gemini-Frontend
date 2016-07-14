class UalReportViewController {
  /*@ngInject*/
  constructor(
    // COMPONENTS
    ualSelectVariablesToSliceModal
  ) {
    this.name = 'ualReportView';

    // MODALS
    this._ualSelectVariablesToSlice=ualSelectVariablesToSliceModal;
  }

  addToSlicers(){
    this._ualSelectVariablesToSlice.open({
      report: null
    }).then(
      response => {

      }
    );
  }


}

export default UalReportViewController;
