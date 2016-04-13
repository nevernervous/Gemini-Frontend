module.exports = {
  '/api/Reports': {
    POST: {
        //SUCCESS
        data: {"reportId": 1},
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

    },
    GET: {
      data: {
        "data": [
          {
            "id": 1,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 2,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 3,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 4,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 5,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 6,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 7,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 8,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 9,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 10,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
          {
            "id": 11,
            "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
          },
              {
                "id": 12,
                "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
              },
              {
                "id": 13,
                "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
              },
                  {
                    "id": 14,
                    "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
                  },
              {
                "id": 15,
               "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
              },
                  {
                    "id": 16,
                   "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
                  },
              {
                "id": 17,
                "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
              },
                  {
                    "id": 18,
                    "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
                  },
              {
                "id": 19,
                "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
              },
                  {
                    "id": 20,
                    "name": "My First Report",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },   
            "lastModificationDate": 2
                  }
        ]
      },
      code: 200
    }
  }
};