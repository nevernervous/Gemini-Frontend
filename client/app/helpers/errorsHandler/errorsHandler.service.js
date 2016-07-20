import angular from 'angular';

let errorsHandler = function ($rootScope, errorMessages) {
  "ngInject";

  const defaultMessage = { type: 'error', text: 'Unexpected error. Please try again.'};

  const defaultHandler = (error) => {
    const custom = { type: 'error', text: error.data ? error.data.errorMessage : null } ;
    const message = errorMessages[error.status] || defaultMessage;
    $rootScope.$broadcast('BANNER.SHOW', custom.text ? custom : message);
  }

  // PARAM: error:
  // {
  //   errorCode: <string>,
  //   errorMessage: <string>,
  //   errorList: List<errorCode, errorMessage>
  // }
  let handle = function(error) {
    defaultHandler(error);
  }

  return {
    handle
  };
};



export default errorsHandler;
