class ualReportInputController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualReportInput';
    this.visibleInput = false;
    this.inputId = "reportName";
    this.firstTime = true;
  }
  
  displayInput(val) {
      this.visibleInput = val;
  }
  labelText(){
      return this.report.name.get()?this.report.name.get():'Enter report name';
  }
  checkEnter(event){
      this.firstTime = false;
      if( (event.which|event.keyCode) === 27 || (event.which|event.keyCode) === 13) { // 27 = esc key
        event.preventDefault();
        event.target.blur();
      }else{
          this.invalidInput = false;
      }
  }
  checkEmptyName(){
      return (this.report.name.get()==false||this.report.name.get()==null);
  }
  errorThrown(){
      if(this.invalidInput){
          this.visibleInput = true;
          return true;
      }
      return false;
  }
}

export default ualReportInputController;
