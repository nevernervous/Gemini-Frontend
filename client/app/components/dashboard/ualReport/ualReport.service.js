let ualReportService = function () {
  "ngInject";
  
  let datasource = null;
  let variables = [];
  
  let create = () => {
    datasource = null;
    variables = [];    
  }
  
  let getDataSource = () => datasource;
  let setDataSource = value => {
    if ( datasource !== value ) { 
      variables = []; 
      datasource = value;  
    }
  }
  
  let getVariables = () => variables;
  let setVariables = value => variables = value;  
  
  return {
    create,
    datasource: {
      get: getDataSource,
      set: setDataSource
    },
    variables: {
      get: getVariables,
      set: setVariables      
    }
  };
};

export default ualReportService;
