import angular from 'angular';

let errorsHandler = function ($rootScope, Messages) {
  "ngInject";

  const defaultMessage = { type: 'error', text: 'Unexpected error. Please try again.'};

  const defaultHandler = (error) => {
    const message = Messages[error.status] || defaultMessage;
    $rootScope.$broadcast('BANNER.SHOW', message);
  }

  // PARAM: error:
  // {
  //   errorCode: <string>,
  //   errorMessage: <string>,
  //   errorList: List<errorCode, errorMessage>
  // }
  let handle = function(handler, error) {
    handler = handler(error) || defaultHandler(error);
    handler();
  }

  return {
    handle
  };
};



export default errorsHandler;
