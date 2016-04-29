<<<<<<< HEAD
module.exports = {
  '/api/Reports': {
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

    },
    GET: {
      data: {
        "data": [
          {
            "id": 190,
            "name": "My First Report 99 lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name 1 lorem ipsum dolor next text on the dark side",
            "lastModification": "2002-04-26T09:00:00",
            "status": 1
          },
          {
            "id": 2,
            "name": "My First Report 88 lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name 2 lorem ipsum dolor next text on the dark side",
            "lastModification": "2015-05-02T10:00:05",
            "status": 1
          },
          {
            "id": 3,
            "name": "My First Report 22",
            "dataSource": "Data Source Name 3",
            "lastModification": "2016-01-05T10:00:06",
            "status": 1
          },
          {
            "id": 4,
            "name": "My First Report 100 lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name 1 lorem ipsum dolor next text on the dark side",
            "lastModification": "2014-06-04T10:00:05",
            "status": 1
          },
          {
            "id": 5,
            "name": "My First Report 80",
            "dataSource": "Data Source Name 2",
            "lastModification": "2016-01-05T10:00:05",
            "status": 1
          },
          {
            "id": 6,
            "name": "My First Report 6 lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name 3 lorem ipsum dolor next text on the dark side",
            "lastModification": "2016-01-06T10:00:05",
            "status": 1
          },
          {
            "id": 7,
            "name": "My First Report 20  lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name  lorem ipsum dolor next text on the dark side 7",
            "lastModification": "2016-01-07T10:00:05",
            "status": 1
          },
          {
            "id": 8,
            "name": "My First Report 14",
            "dataSource": "Data Source Name 8",
            "lastModification": "2013-11-21T20:00:30",
            "status": 1
          },
          {
            "id": 9,
            "name": "My First Report 49",
            "dataSource": "Data Source Name 4",
            "lastModification": "2016-01-09T10:00:05",
            "status": 1
          },
          {
            "id": 10,
            "name": "My First Report 160 lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name 5",
            "lastModification": "2016-01-10T10:00:04",
            "status": 1
          },
          {
            "id": 11,
            "name": "My First Report 141 lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name 6",
            "lastModification": "2016-01-11T10:00:05",
            "status": 1
          },
          {
            "id": 12,
            "name": "My First Report 162 lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name 8",
            "lastModification": "2016-01-12T02:00:05",
            "status": 1
          },
          {
            "id": 1,
            "name": "My First Report 183",
            "dataSource": "Data Source Name 1",
            "lastModification": "2016-10-21T10:00:09",
            "status": 1
          },
          {
            "id": 14,
            "name": "My First Report 1004 lorem ipsum dolor next text on the dark side",
            "dataSource": "Data Source Name 4",
            "lastModification": "2016-09-15T10:00:05",
            "status": 1
          },
          {
            "id": 15,
            "name": "My First Report 1875",
            "dataSource": "Data Source Name 8",
            "lastModification": "2016-01-15T10:00:05",
            "status": 1
          },
          {
            "id": 16,
            "name": "My First Report 15466",
            "dataSource": "Data Source Name 1",
            "lastModification": "2016-06-01T19:00:02",
            "status": 1
          },
          {
            "id": 17,
            "name": "My First Report 16467",
            "dataSource": "Data Source Name 2",
            "lastModification": "2016-07-01T12:00:05",
            "status": 1
          },
          {
            "id": 18,
            "name": "My First Report 14648",
            "dataSource": "Data Source Name 6",
            "lastModification": "2016-01-30T10:00:05",
            "status": 1
          },
          {
            "id": 19,
            "name": "My First Report 2",
            "dataSource": "Data Source Name 9",
            "lastModification": "2016-02-19T10:00:01",
            "status": 1
          },
          {
            "id": 20,
            "name": "My First Report 20",
            "dataSource": "Data Source Name 10",
            "lastModification": "2016-03-24T10:00:05",
            "status": 1
          }
        ]
      },
      code: 200
    }
  },
  '/api/Reports/1': {
    GET: {
      data: {

        "name": "Report name",
        "id": 1,
        "dataSourceId": 1,
        "dataSource": "DataSource Name",
        "variables": [
          {
            "Id": 1,
            "Order": 1
          },
        ],
        "aggregators": [
          {
            "Id": 1,
            "Order": 2
          },
          {
            "Id": 2,
            "Order": 1
          },
          {
            "Id": 3,
            "Order": 3
          },
        ]

      },
      code: 200
    }
  }

=======
module.exports = {
  '/api/Reports': {
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

    },
    GET: {
      data: {
        "data": [
          {
            "id": 190,
            "name": "My First Report 99",
            "dataSource": "Data Source Name 1",
            "lastModificationDate": "2002-04-26T09:00:00",
            "status": 1
          },
          {
            "id": 2,
            "name": "My First Report 88",
            "dataSource": "Data Source Name 2",
            "lastModificationDate": "2015-05-02T10:00:05",
            "status": 1
          },
          {
            "id": 3,
            "name": "My First Report 22",
            "dataSource": "Data Source Name 3",
            "lastModificationDate": "2016-01-05T10:00:06",
            "status": 1
          },
          {
            "id": 4,
            "name": "My First Report 100",
            "dataSource": "Data Source Name 1",
            "lastModificationDate": "2014-06-04T10:00:05",
            "status": 1
          },
          {
            "id": 5,
            "name": "My First Report 80",
            "dataSource": "Data Source Name 2",
            "lastModificationDate": "2016-01-05T10:00:05",
            "status": 1
          },
          {
            "id": 6,
            "name": "My First Report 6",
            "dataSource": "Data Source Name 3",
            "lastModificationDate": "2016-01-06T10:00:05",
            "status": 1
          },
          {
            "id": 7,
            "name": "My First Report 20",
            "dataSource": "Data Source Name 7",
            "lastModificationDate": "2016-01-07T10:00:05",
            "status": 1
          },
          {
            "id": 8,
            "name": "My First Report 14",
            "dataSource": "Data Source Name 8",
            "lastModificationDate": "2013-11-21T20:00:30",
            "status": 1
          },
          {
            "id": 9,
            "name": "My First Report 49",
            "dataSource": "Data Source Name 4",
            "lastModificationDate": "2016-01-09T10:00:05",
            "status": 1
          },
          {
            "id": 10,
            "name": "My First Report 160",
            "dataSource": "Data Source Name 5",
            "lastModificationDate": "2016-01-10T10:00:04",
            "status": 1
          },
          {
            "id": 11,
            "name": "My First Report 141",
            "dataSource": "Data Source Name 6",
            "lastModificationDate": "2016-01-11T10:00:05",
            "status": 1
          },
          {
            "id": 12,
            "name": "My First Report 162",
            "dataSource": "Data Source Name 8",
            "lastModificationDate": "2016-01-12T02:00:05",
            "status": 1
          },
          {
            "id": 1,
            "name": "My First Report 183",
            "dataSource": "Data Source Name 1",
            "lastModificationDate": "2016-10-21T10:00:09",
            "status": 1
          },
          {
            "id": 14,
            "name": "My First Report 1004",
            "dataSource": "Data Source Name 4",
            "lastModificationDate": "2016-09-15T10:00:05",
            "status": 1
          },
          {
            "id": 15,
            "name": "My First Report 1875",
            "dataSource": "Data Source Name 8",
            "lastModificationDate": "2016-01-15T10:00:05",
            "status": 1
          },
          {
            "id": 16,
            "name": "My First Report 15466",
            "dataSource": "Data Source Name 1",
            "lastModificationDate": "2016-06-01T19:00:02",
            "status": 1
          },
          {
            "id": 17,
            "name": "My First Report 16467",
            "dataSource": "Data Source Name 2",
            "lastModificationDate": "2016-07-01T12:00:05",
            "status": 1
          },
          {
            "id": 18,
            "name": "My First Report 14648",
            "dataSource": "Data Source Name 6",
            "lastModificationDate": "2016-01-30T10:00:05",
            "status": 1
          },
          {
            "id": 19,
            "name": "My First Report 2",
            "dataSource": "Data Source Name 9",
            "lastModificationDate": "2016-02-19T10:00:01",
            "status": 1
          },
          {
            "id": 20,
            "name": "My First Report 20",
            "dataSource": "Data Source Name 10",
            "lastModificationDate": "2016-03-24T10:00:05",
            "status": 1
          }
        ]
      },
      code: 200
    }
  },
  '/api/Reports/1': {
    GET: {
      data: {

        "name": "Report name",
        "id": 1,
        "dataSourceId": 1,
        "dataSource": "DataSource Name",
        "variables": [
          {
            "Id": 1,
            "Order": 1
          },
        ],
        "aggregators": [
          {
            "Id": 1,
            "Order": 2
          },
          {
            "Id": 2,
            "Order": 1
          },
          {
            "Id": 3,
            "Order": 3
          },
        ]

      },
      code: 200
    }
  }

>>>>>>> 83eb1d47c72147042cd3e6b6b3fe22ba1d67a335
};