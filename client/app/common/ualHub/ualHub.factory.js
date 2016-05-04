let UalHubFactory = function () {
  "ngInject";
  let globalConnections = [];


  function initNewConnection(rootPath, logging) {
    var connection = null;
    if (rootPath) {
      connection = $.hubConnection(rootPath, {
        useDefaultPath: false
      });
    } else {
      connection = $.hubConnection();
    }
    console.dir("Logging " + logging);
    connection.logging = (logging ? true : false);
    return connection;
  }

  function getConnection(useSharedConnection, rootPath, logging) {
    if (useSharedConnection) {
      console.log("Shared connection");
      return typeof globalConnections[rootPath] === 'undefined' ?
        globalConnections[rootPath] = initNewConnection(rootPath, logging) :
        globalConnections[rootPath];
    } else {
      console.log("New connection");
      return initNewConnection(rootPath, logging);
    }
  }

  return function (hubName, {
    listeners,
    methods,
    rootPath,
    queryParams,
    errorHandler,
    logging = false,
    useSharedConnection = true,
    transport,
    jsonp = true,
    stateChanged,
    autoConnect
  }) {

    let Hub = {};

    Hub.connection = getConnection(useSharedConnection, rootPath, logging);
    Hub.proxy = Hub.connection.createHubProxy(hubName);

    Hub.on = (event, fn) => {
      Hub.proxy.on(event, fn);
    };
    Hub.invoke = function () {
      return Hub.proxy.invoke.apply(Hub.proxy, arguments)
    };
    Hub.disconnect = () => {
      Hub.connection.stop();
    };

    Hub.connect = (queryParams) => {
      var startOptions = {};
      if (transport) startOptions.transport = transport;
      if (jsonp) startOptions.jsonp = jsonp;
      if (queryParams) Hub.connection.qs = queryParams;
      return Hub.connection.start(startOptions);
    };

    if (listeners) {
      Object.getOwnPropertyNames(listeners)
        .filter((propName) => {
          return typeof listeners[propName] === 'function';
        })
        .forEach((propName) => {
          Hub.on(propName, listeners[propName]);
        });
    }
    if (methods) {
      _.forEach(methods, (method) => {
        Hub[method] = function () {
          let args = _.toArray(arguments);
          args.unshift(method);
          return Hub.invoke.apply(Hub, args);
        };
      });
    }
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
