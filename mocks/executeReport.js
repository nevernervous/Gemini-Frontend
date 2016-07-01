module.exports = {
  '/api/ExecuteReports': {
    POST: {
      //SUCCESS
      data: { "id": 1 },
      code: 201,

      //REPORT NAME DUPLICATED
      //        data:{
      //         "errorCode": 0,
      //         "errorTitle": null,
      //         "errorMessage": "Report name already exists. Please select another.",
      //         "errorMessages": [
      //           "Report name already exists. Please select another.",
      //         ]
      //        },
      //        code: 400,

      //ERROR DIFFERENT FROM DUPLICATED
      //        data:{
      //         "errorCode": 0,
      //         "errorTitle": null,
      //         "errorMessage": "Another plained message.",
      //         "errorMessages": [
      //           "Another plained message.",
      //         ]
      //        },
      //        code: 400,

      //SERVER ERROR GENERIC
      //        code: 500,
      //        data: {},

    }
  }

};
