module.exports = {
  '/api/settings': {
    GET: {
      data: {
        "data":[
          {
            "name":"session.timeout",
            "value":"45"
          },
          {
            "name":"login.contact",
            "value":"support@united.com"
          },
          {
            "name":"session.warning",
            "value":"15"
          }
        ]
      },
      code: 200
    }
  }
};
