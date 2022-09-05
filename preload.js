const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message) {
      console.log("notify");
      ipcRenderer.send("notify", message);
    },
  },
  batteryApi: {},
  filesApi: {},
});
