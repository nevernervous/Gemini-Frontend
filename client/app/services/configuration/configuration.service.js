class configurationProvider {
    constructor() {
        this.parameters = {};
    }
    load(values) {
        this.parameters = values;
    }
    /*@ngInject*/
    $get() {
      let all = () => { 
        return this.parameters;
      };
      
      let get = (name) => { 
        return this.parameters[name];
      };
      
      let set = (name, value) => { 
        this.parameters[name] = value;
      };  
      
      return {
        all, get, set
      };      
    }
}

export default configurationProvider;
