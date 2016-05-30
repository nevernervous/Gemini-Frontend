let UalSignalRService = function (Properties, ualHub) {
  "ngInject";
  let hubs = new Map();

  let options = _.defaults(Properties["signalR"], {
    errorHandler: _onError,
    stateChanged: _onStateChanged
  });
  let _onError = (error) => {
    console.log("On Error")
  }

  let _onStateChanged = (states) => {
    console.log("On State Changed");
  }

  let _createHub = (hubName) => {
    return new ualHub(hubName, _.defaults(options))
  }

  let _getHubConnection = (hubName) => {
    let hub = hubs.get(hubName);
    return !hub ? _createHub(hubName) : hub;
  }

  let subscribe = (hubName, event, fn) => {
    let hub = _getHubConnection(hubName);
    hub.disconnect();
    hub.on(event, fn);
    hub.connect();
  }

  let unsubscribe = (hubName, event) => {
    let hub = _getHubConnection(hubName);
    hub.off(event);
  }

  let invoke = (hubName, serverMethod, ...params) => {
    let hub = _getHubConnection(hubName);
    return hub.onConnect.then(() => {
      var args = _.toArray(params);
      args.unshift(serverMethod);
      return hub.invoke.apply(hub, args);
    });
  }

  return {
    subscribe,
    unsubscribe,
    notify: invoke
  }
}

export default UalSignalRService;
