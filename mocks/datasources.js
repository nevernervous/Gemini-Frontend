module.exports = {
  '/api/DataSources': {
    GET: {
      data: {
        "data": [
          {
            "id": 1,
            "name": "Data Source Name Lorem Ipseum Jusrgjsn Guruil Grteju Modal Abode 1",
            "description": "Data Source Description 1",
            "group": {
              "groupId": 1,
              "groupName": "Group Name Furess Hystyu Adobe Muse Gurte Nuerri 1",
              "order": 2
            },
            "order": 2
          },
          {
            "id": 2,
            "name": "Data Source Name 2",
            "description": "Data Source Description 2",
            "group": {
              "groupId": 1,
              "groupName": "Group Name Furess Hystyu Adobe Muse Gurte Nuerri 1",
              "order": 2
            },
            "order": 3
          },
          {
            "id": 3,
            "name": "Data Source Name 3",
            "description": "Data Source Description 3",
            "group": {
              "groupId": 2,
              "groupName": "Group Name 2",
              "order": 3
            },
            "order": 4
          },
          {
            "id": 4,
            "name": "Data Source Name 4",
            "description": "Data Source Description 4",
            "group": {
              "groupId": 2,
              "groupName": "Group Name 2",
              "order": 3
            },
            "order": 6
          },
          {
            "id": 5,
            "name": "Data Source Name 5",
            "description": "Data Source Description 5",
            "group": {
              "groupId": 2,
              "groupName": "Group Name 2",
              "order": 3
            },
            "order": 5
          },
          {
            "id": 6,
            "name": "Data Source Name 6",
            "description": "Data Source Description 6",
            "group": {
              "groupId": 2,
              "groupName": "Group Name 2",
              "order": 3
            },
            "order": 9
          },
          {
            "id": 7,
            "name": "Data Source Name 7",
            "description": "Data Source Description 7",
            "group": {
              "groupId": 3,
              "groupName": "Group Name 3",
              "order": 1
            },
            "order": 8
          },
          {
            "id": 8,
            "name": "Data Source Name 8",
            "description": "Data Source Description 8",
            "group": {
              "groupId": 4,
              "groupName": "Group Name 4",
              "order": 4
            },
            "order": 11
          },
          {
            "id": 9,
            "name": "Data Source Name 9",
            "description": "Data Source Description 9",
            "group": {
              "groupId": 0,
              "groupName": "Group Name 5",
              "order": 9
            },
            "order": 19
          },
          {
            "id": 10,
            "name": "Data Source Name 10",
            "description": "Data Source Description 10",
            "group": {
              "groupId": 1,
              "groupName": "Group Name Furess Hystyu Adobe Muse Gurte Nuerri 1",
              "order": 2
            },
            "order": 0
          },
          {
            "id": 11,
            "name": "Data Source Name 11",
            "description": "Data Source Description 11",
            "group": {
              "groupId": 3,
              "groupName": "Group Name 3",
              "order": 1
            },
            "order": 13
          },
              {
            "id": 12,
            "name": "Data Source Name 12",
            "description": "Data Source Description 12",
            "group": {
              "groupId": 4,
              "groupName": "Group Name 4",
              "order": 4
            },
            "order": 14
          },
              {
            "id": 13,
            "name": "Data Source Name 13",
            "description": "Data Source Description 13",
            "group": {
              "groupId": 2,
              "groupName": "Group Name 2",
              "order": 3
            },
            "order": 15
          },
                  {
            "id": 14,
            "name": "Data Source Name 14",
            "description": "Data Source Description 14",
            "group": {
              "groupId": 4,
              "groupName": "Group Name 2",
              "order": 4
            },
            "order": 16
          },
              {
            "id": 15,
            "name": "Data Source Name 15",
            "description": "Data Source Description 15",
            "group": {
              "groupId": 2,
              "groupName": "Group Name 2",
              "order": 3
            },
            "order": 17
          },
                  {
            "id": 16,
            "name": "Data Source Name 16",
            "description": "Data Source Description 16",
            "group": {
              "groupId": 4,
              "groupName": "Group Name 4",
              "order": 4
            },
            "order": 18
          },
              {
            "id": 17,
            "name": "Data Source Name 17",
            "description": "Data Source Description 17",
            "group": {
              "groupId": 3,
              "groupName": "Group Name 3",
              "order": 1
            },
            "order": 20
          },
                  {
            "id": 18,
            "name": "Data Source Name 18",
            "description": "Data Source Description 18",
            "group": {
              "groupId": 4,
              "groupName": "Group Name 4",
              "order": 4
            },
            "order": 21
          },
              {
            "id": 19,
            "name": "Data Source Name 19",
            "description": "Data Source Description 19",
            "group": {
              "groupId": 4,
              "groupName": "Group Name 4",
              "order": 4
            },
            "order": 22
          }
        ]
      },
      code: 200
    }
  },
  '/api/DataSources/1/ColumnGroups': {
    GET: {
      data: {
        "data": [
          {
            "groupId": 1,
            "groupName": "Column Group Name",
            "groupUrl": "/api/Datasources/1/ColumnGroups/1"
          },
          {
            "groupId": 2,
            "groupName": "Second Group Name",
            "groupUrl": "/api/Datasources/1/ColumnGroups/2"
          }
        ]
      }
    }
  },
  '/api/DataSources/1/ColumnGroups/1/Columns': {
    GET: {
      data:{
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
          },
          {
            "id": 2,
            "name": "Variable name 2",
            "order": 2,
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
          },
          {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
          },
            {
            "id": 3,
            "name": "Variable name 3",
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
          },
          {
            "id": 4,
            "name": "Variable name 4",
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
          },
          {
            "id": 5,
            "name": "Variable name 5",
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
  },
  '/api/DataSources/1/ColumnGroups/2/Columns': {
    GET: {
      data: {
        "data": [
          {
            "id": 6,
            "name": "Variable name two",
            "order": 1,
            "type": "Type",
            "description": "Variable Description two",
            "dataSource": {
              "dataSourceId": 1,
              "dataSourceName": "Data Source Name"
            },
            "group": {
              "groupId": 2,
              "groupName": "Group Name"
            }
          }
        ]
      }
    }
  }
};
