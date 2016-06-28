module.exports = {
    '/api/FilterOperatorDatatype': {
        GET: {
        "data": [
          {
            "dataType": {
              "id": 8,
              "description": "String"
            },
            "filterOperators": [
              {
                "id": 1,
                "operator": "=",
                "description": "Equal to, Specify multiple values with a comma (OR conditions)"
              },
              {
                "id": 2,
                "operator": "<>",
                "description": "Not equal to, Specify multiple values with a comma (OR conditions)"
              },
              {
                "id": 3,
                "operator": "<",
                "description": "Less than"
              },
              {
                "id": 4,
                "operator": "<=",
                "description": "Less than or equal to"
              },
              {
                "id": 5,
                "operator": ">",
                "description": "Greater than"
              },
              {
                "id": 6,
                "operator": ">=",
                "description": "Greater than or equal to"
              },
              {
                "id": 7,
                "operator": "Begins with",
                "description": "Can use _ as a wildcard"
              },
              {
                "id": 8,
                "operator": "Does NOT begin with",
                "description": "Can use _ as a wildcard"
              },
              {
                "id": 9,
                "operator": "Between",
                "description": "Includes the range and specified values"
              },
              {
                "id": 10,
                "operator": "NOT between",
                "description": "Includes neither the range nor specified values"
              },
              {
                "id": 11,
                "operator": "Contains",
                "description": "Can use _ as a wildcard"
              },
              {
                "id": 12,
                "operator": "Does NOT contain",
                "description": "Can use _ as a wildcard"
              },
              {
                "id": 13,
                "operator": "Ends with",
                "description": "Can use _ as a wildcard"
              },
              {
                "id": 14,
                "operator": "Does NOT end with",
                "description": "Can use _ as a wildcard"
              },
              {
                "id": 15,
                "operator": "Is blank",
                "description": "Data value is empty"
              },
              {
                "id": 16,
                "operator": "NOT blank",
                "description": "Data value is not empty"
              },
              {
                "id": 17,
                "operator": "Is null",
                "description": "Data value does not exist"
              },
              {
                "id": 18,
                "operator": "NOT null",
                "description": "Data value must exist"
              }
            ]
          }
        ]
      }
    }
};
