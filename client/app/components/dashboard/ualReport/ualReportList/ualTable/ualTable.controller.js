class UalTableController {
  /*@ngInject*/
  constructor() {
      this.isEnabled = true;  
  }
  
  $onInit(){
      this.columns =  "columns-" + this.tableColumns.length;  
  }  
  
  contains(column){
      return this.predicate.indexOf(column) > -1;
  }
  
  order(predicate) {     
    this.predicate = predicate;
    this.reverse = (this.predicate === predicate) ? !this.reverse : false;  
    
     if ($.isArray(predicate)){
         let multiplePredicate = [];
         
        predicate.forEach( item => {
            multiplePredicate.push((item.indexOf("*") > -1) ? ((item.startsWith("-") ? (this.reverse ? item.replace("-", "") : item) : (this.reverse ? ("-" + item) : item)).replace("*","")) : item);            
        }); 
        
        this.predicate = multiplePredicate;          
     }
  };  
  
}

export default UalTableController;
