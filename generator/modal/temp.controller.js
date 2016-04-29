class <%= upCaseName %>Controller {
  /*@ngInject*/
  constructor(close) {
    this.name = '<%= name %>';
    this._close = close;
  }
  
  close(){
    this._close(false);
  }
}

export default <%= upCaseName %>Controller;
