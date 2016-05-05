let UalSignalRService = function (Properties, ualHub) {
  "ngInject";
  let hubs = new Map();

  let _onError = (error) => {
    console.log("On Error")
  }

  let _onStateChanged = (states) => {
    console.log("On State Changed");
  }

  let options = _.defaults(Properties["setting.signalR"], {
    errorHandler: _onError,
    stateChanged: _onStateChanged
  });

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
    let subscription = hub.on(event, fn);
    hub.connect();
  }

  let unsubscribe = (hubName, event) => {
    //These method is not secure
    let hub = _getHubConnection(hubName);
    hub.off(event);
  }

  let getHub = (hubName) => {
    return _getHubConnection(hubName);
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
    invoke,
    getHub
  }
}

export default UalSignalRService;
