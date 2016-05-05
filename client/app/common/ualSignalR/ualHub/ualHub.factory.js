let UalHubFactory = function () {
  "ngInject";
  let globalConnections = [];


  function _initNewConnection(endpoint, logging) {
    var connection = null;
    if (endpoint) {
      connection = $.hubConnection(endpoint, {
        useDefaultPath: false
      });
    } else {
      connection = $.hubConnection();
    }
    connection.logging = (logging ? true : false);
    return connection;
  }

  function _getConnection(useSharedConnection, endpoint, logging) {
    if (useSharedConnection) {
      console.log("Shared connection");
      return typeof globalConnections[endpoint] === 'undefined' ?
        globalConnections[endpoint] = _initNewConnection(endpoint, logging) :
        globalConnections[endpoint];
    } else {
      console.log("New connection");
      return _initNewConnection(endpoint, logging);
    }
  }

  return function (hubName, {
    endpoint,
    queryParams,
    errorHandler,
    logging = false,
    useSharedConnection = true,
    transport,
    jsonp = true,
    stateChanged,
    autoConnect = true
  }) {

    let Hub = {};

    Hub.connection = _getConnection(useSharedConnection, endpoint, logging);
    Hub.proxy = Hub.connection.createHubProxy(hubName);

    Hub.on = (event, fn) => {
      return Hub.proxy.on(event, fn);
    };

    Hub.off = (event, fn) => {
      return Hub.proxy.off(event, fn);
    }

    Hub.invoke = function () {
      return Hub.proxy.invoke.apply(Hub.proxy, arguments)
    };

    Hub.disconnect = () => {
      try {
        Hub.connection.stop();
      } catch (err) {
        console.error(error);
      }
    };

    Hub.connect = (queryParams) => {
      var startOptions = {};
      if (transport) startOptions.transport = transport;
      if (jsonp) startOptions.jsonp = jsonp;
      if (queryParams) Hub.connection.qs = queryParams;
      return Hub.connection.start(startOptions);
    };

    if (queryParams) {
      Hub.connection.qs = queryParams;
    }
    if (errorHandler) {
      Hub.connection.error(errorHandler);
    }
    if (stateChanged) {
      Hub.connection.stateChanged(stateChanged);
    }


    if (autoConnect === undefined || autoConnect) {
      Hub.onConnect = Hub.connect();
    }

    return Hub;
  }
}

export default UalHubFactory;
