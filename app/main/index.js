const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
let win;
app.on("ready", () => {
  win = new BrowserWindow({
    width: 800,
    height: 622,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  if (isDev) {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadFile(
      path.resolve(__dirname, "../../renderer/pages/main/index.html")
    );
  }
});
