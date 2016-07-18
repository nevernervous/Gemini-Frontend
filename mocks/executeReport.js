module.exports = {
  '/api/ExecuteReports': {
    POST: {
      //SUCCESS
      code: 201,
      data: {
        "data": [
          ['2012', 10, 11, 12, 13, 15, 16],
          ['2013', 10, 11, 12, 13, 15, 16],
          ['2014', 10, 11, 12, 13, 15, 16],
          ['2015', 10, 11, 12, 13, 15, 16],
          ['2016', 10, 11, 12, 13, 15, 16]
        ],
        "headers": [
          {  name: "Header1", type: "Number", values: [2012, 2013, 2014, 2015, 2016] },
          {  name: "Header2", type: "String" },
          {  name: "Header3", type: "Date" },
          {  name: "Header4", type: "Number" },
          {  name: "Header5", type: "Number" },
          {  name: "Header6", type: "Number" },
          {  name: "Header7", type: "Number" }
        ]
      },
      timeout: 10000
    }
  }

};
