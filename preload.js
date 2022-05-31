const { contextBridge, ipcRenderer, shell } = require("electron");

contextBridge.exposeInMainWorld("Advertising", {
  openBrowser: function (url) {
    shell.openExternal(url);
  },
});
