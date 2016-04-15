class ualReportInputController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualReportInput';
    this.visibleInput = false;
    this.inputId = "reportName";
    this.firstTime = !this.report.name.get();
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
      }
  }
  checkEmptyName(){
      return (!this.report.name.get());
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
