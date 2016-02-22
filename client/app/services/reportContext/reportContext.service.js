let reportContextService = function () {
  "ngInject";
  
  let datasource = null;
  let variables = [];
  
  let create = () => {
    datasource = null;
    variables = [];    
  }
  
  let getDataSource = () => datasource;
  let setDataSource = value => datasource = value;
  
  let pushVariable = value => variables.push(value);
  let pullVariable = value => { 
    let index = variables.indexOf(value);
    if (index > -1) { 
      variables.splice(index, 1);
    }
  }
  let getVariables = () => variables;
  
  return {
    create,
    datasource: {
      get: getDataSource,
      set: setDataSource
    },
    variables: {
      push: pushVariable,
      pull: pullVariable,
      get: getVariables
    }
  };
};

export default reportContextService;
