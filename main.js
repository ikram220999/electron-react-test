const {
  BrowserWindow,
  app,
  ipcMain,
  Notification,
  Tray,
  Menu,
} = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
  var win = new BrowserWindow({
    width: 600,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    resizable: false,
  });

  // win.setMenu(null);

  win.loadFile("index.html");

  win.on("minimize", function (event) {
    event.preventDefault();
    win.hide();
  });

  win.on("close", function (event) {
    if (!app.isQuiting) {
      event.preventDefault();
      win.hide();
    }

    return false;
  });

  let template = [];

  tray = new Tray("./src/assets/logo.png");
  tray.setToolTip("Tray for Todo");
  tray.on("click", () => {
    win.isVisible() ? win.hide() : win.show();
  });

  if (win.isVisible()) {
    template = [
      {
        label: "Hide",
        click: function () {
          win.hide();
        },
      },
      {
        label: "Quit",
        click: function () {
          (app.isQuiting = true), app.quit();
        },
      },
    ];
  } else {
    template = [
      {
        label: "Show",
        click: function () {
          win.show();
        },
      },
      {
        label: "Quit",
        click: function () {
          (app.isQuiting = true), app.quit();
        },
      },
    ];
  }

  let contextMenu = Menu.buildFromTemplate(template);
  tray.setContextMenu(contextMenu);
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

ipcMain.on("notify", (__, message) => {
  new Notification({ title: "Notification", body: message }).show();
});

// ipcMain.on('form', )

app.whenReady().then(createWindow);

// app.on("window-all-closed", () => {
//   BrowserWindow.getFocusedWindow.hide();
//   // any other logic
// });
