module.exports = {
  '/api/DataSource': {
    GET: {
      data: [
      {
        "id": 1,
        "name": "Data Source Name 1",
        "description": "Data Source Description 1",
        "group": {
          "groupId": 1,
          "groupName": "Group Name 1",
          "order": "column"
        },
        "order": "column"
      },
      {
        "id": 2,
        "name": "Data Source Name 2",
        "description": "Data Source Description 2",
        "group": {
          "groupId": 1,
          "groupName": "Group Name 1",
          "order": "column"
        },
        "order": "column"
      },
      {
        "id": 3,
        "name": "Data Source Name 3",
        "description": "Data Source Description 3",
        "group": {
          "groupId": 2,
          "groupName": "Group Name 2",
          "order": "column"
        },
        "order": "column"
      }],
      code: 200
    }
  },
  '/api/DataSource/1/ColumnGroups': {
    GET: {
      "data": [
        {
          "groupId": 1,
          "groupName": "Column Group Name",
          "groupUrl": "/api/Datasources/1/ColumnGroups/1"
        }
      ]
    }
  },
  '/api/DataSource/1/ColumnGroups/1': {
    GET: {
      "data": [
        {
          "id": 1,
          "name": "Variable name",
          "order": 1,
          "type": "Type",
          "description": "Variable Description",
          "dataSource": {
            "dataSourceId": 1,
            "dataSourceName": "Data Source Name"
          },
          "group": {
            "groupId": 1,
            "groupName": "Group Name"
          }
        }
      ]
    }
  }   
};