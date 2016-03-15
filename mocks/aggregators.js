module.exports = {
  '/api/DataSources/1/Aggregators': {
    GET: {
      data: {
        "data": [
          {
              "id": 1,
              "name": "Aggregator Name 1",
              "isRecomendid": true,
              "isDefaultAggregator": true,
              "order": 5
          },
          {
              "id": 2,
              "name": "Aggregator Name 2",
              "isRecomendid": true,
              "isDefaultAggregator": false,
              "order": 4
          },
          {
              "id": 3,
              "name": "Aggregator Name 3",
              "isRecomendid": false,
              "isDefaultAggregator": false,
              "order": 3
          },
          {
              "id": 4,
              "name": "Aggregator Name 4",
              "isRecomendid": false,
              "isDefaultAggregator": true,
              "order": 2
          },
          {
              "id": 5,
              "name": "Aggregator Name 5",
              "isRecomendid": true,
              "isDefaultAggregator": false,
              "order": 1
          }
        ]
      }
    }
  }
};
