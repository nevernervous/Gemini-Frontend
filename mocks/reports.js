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
      code: 200,
      data: {
        "totalCount": 20,
        "pageNumber": 1,
      "data": [
          {
            "id": 190,
            "name": "My First Report 99",
            "dataSource": "Data Source Name 1",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 2,

            "name": "My First Report 88 asd asd asd asda sdasd asd asd asdd asdsasd asd asdasd asd asdasd asdds ada s",
            "dataSource": "Data Source Name 2",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 3,
            "name": "My First Report 22",
            "dataSource": "Data Source Name 3",
            "modificationDate": "2016-01-05T10:00:06",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 4,
            "name": "My First Report 100",
            "dataSource": "Data Source Name 1",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 5,
            "name": "My First Report 80",
            "dataSource": "Data Source Name 2",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 6,
            "name": "My First Report 6",
            "dataSource": "Data Source Name 3",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 7,
            "name": "My First Report 20",
            "dataSource": "Data Source Name 7",
            "modificationDate": "2016-01-07T10:00:05",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 8,
            "name": "My First Report 14",
            "dataSource": "Data Source Name 8",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 9,
            "name": "My First Report 49",
            "dataSource": "Data Source Name 4",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 10,
            "name": "My First Report 160",
            "dataSource": "Data Source Name 5",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 11,
            "name": "My First Report 141",
            "dataSource": "Data Source Name 6",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 12,
            "name": "My First Report 162",
            "dataSource": "Data Source Name 8",
            "modificationDate": "2016-01-12T02:00:05",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 1,
            "name": "My First Report 183",
            "dataSource": "Data Source Name 1",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 14,
            "name": "My First Report 1004",
            "dataSource": "Data Source Name 4",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 15,
            "name": "My First Report 1875",
            "dataSource": "Data Source Name 8",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 16,
            "name": "My First Report 15466",
            "dataSource": "Data Source Name 1",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 17,
            "name": "My First Report 16467",
            "dataSource": "Data Source Name 2",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 18,
            "name": "My First Report 14648",
            "dataSource": "Data Source Name 6",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 19,
            "name": "My First Report 2",
            "dataSource": "Data Source Name 9",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          },
          {
            "id": 20,
            "name": "My First Report 20",
            "dataSource": "Data Source Name 10",
            "modificationDate": "2016-05-15T21:00:47.667-05:00",
            "DataSourceRefreshDate": "2016-05-15T21:00:47.667-05:00"
          }
        ]
      }
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
    },
    PUT:{
      data:{ "id": 1, "name": "New name" },
      code: 200
    }
  }

};
