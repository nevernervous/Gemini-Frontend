class ualReportInputController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualReportInput';
    this.visibleInput = false;
  }
  
  displayInput(val) {
      this.visibleInput = val;
  }
  labelText(){
      return this.report.name.get()?this.report.name.get():'Enter report name';
  }
  checkEnter(event){
      if( (event.which|event.keyCode) === 27 || (event.which|event.keyCode) === 13) { // 27 = esc key
        event.preventDefault();
        event.target.blur();
      }
      console.log(event);
  }
}

export default ualReportInputController;
