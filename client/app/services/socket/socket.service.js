let socketService = function (ualHub, $rootScope) {
  "ngInject";
  let sendReport = (message, report) => {
      console.log("Sended report");
      console.dir(message, report);
      $rootScope.$broadcast("REPORT.UPDATED", message, report);

  };

  let joined = (message) => {
      console.log("Joined");
      $rootScope.$broadcast("CLIENT.SUBSCRIBED", message);
  };

  let stateSocketChange = (state) => {
      console.log("New state");
      console.dir(state);
    };

  let myHub = new ualHub("report", {
    listeners: {
      sendReport: sendReport,
      joined: joined
    },
    logging : true,
    rootPath: "http://localhost:8098/signalr",
    methods: ["joinRoom", "updateReport", "updateReportToRoom"],
    errorHandler: (error) => {
      console.error("Error handled" + error);
      console.dir(error);
    },
    transport: ["longPolling"],
    stateChanged: stateSocketChange,
    autoConnect: true
  });

  let notifySavedReport = (message, report) => {
      return myHub.updateReport(message, report);
  }

  let subscribeToRoom = (roomName) => {
      return myHub.joinRoom(roomName);
  }

  let notifySavedReportToRoom = (roomName, message, report) => {
    return myHub.updateReportToRoom(roomName, message, report);
  }

  myHub.onConnect.done(() => {
    console.log("Connection success");
  }).fail(() => {
    console.log("Failed Connection");
  });


  return {
    notifySavedReport,
    subscribeToRoom,
    notifySavedReportToRoom
  };
};

export default socketService;
