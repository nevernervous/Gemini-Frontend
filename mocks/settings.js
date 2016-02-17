module.exports = {
  '/api/settings': {
    GET: {
      data: {
        "parameters":[
          {
            "name":"session.timeout",
            "value":"3"
          },
          {
            "name":"login.contact",
            "value":"support@united.com"
          },
          {
            "name":"session.warning",
            "value":"1"
          }
        ]
      },
      code: 200
    }
  }
};