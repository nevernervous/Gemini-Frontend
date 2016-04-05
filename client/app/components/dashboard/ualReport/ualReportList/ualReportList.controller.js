class UalReportListController {
  /*@ngInject*/
  constructor(Report) {
    this.name = 'ualReportList';
        
    this.reports = [];
    
    this._reportService = Report;
    
    this._initialize();    
  }
  
  _initialize() {

    this._reportService.all()
      .then(response => this.reports = _.chain(response.data)
                                       .sortByOrder(['lastModificationDate'], ['desc'])
                                       .value());                                          
  }
  
  sortColumn(e, args) {  
    let icon = $("#"+e.target.id).find("i");          
    let columns = [];
    let order = [];
    let isAscending = false;
    
    if ($(".-show-sort").parent().parent()[0].id != icon.parent().parent()[0].id) 
        $(".-show-sort").removeClass("ion-ios-arrow-up").removeClass("ion-ios-arrow-down");       
    
    $(".-show-sort").removeClass("-show-sort").addClass("-hide-sort"); 
    icon.removeClass("-hide-sort").addClass("-show-sort");
     
    isAscending = !icon.hasClass( "ion-ios-arrow-up" );
      
    icon.hasClass( "ion-ios-arrow-up" ) ? icon.removeClass("ion-ios-arrow-up").addClass("ion-ios-arrow-down")
                                        : icon.removeClass("ion-ios-arrow-down").addClass("ion-ios-arrow-up");
      
    $.each(args, function() {
      $.each(this, function(key, value) {
        key == "column" ? columns.push(value) : order.push(isAscending ? 'asc' : 'desc');
      });      
    })
      
    if (e.target.id == "ual-column-data-source"){
      order[order.length - 1] = 'asc';
    }
      
    this.reports = _.chain(this.reports)
                    .sortByOrder(columns, order)
                    .value();                  
  }
  
}

export default UalReportListController;
