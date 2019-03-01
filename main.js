//TODO move these to a config file.
const MAIN_ENTRY_FILE = 'file://' + __dirname + '/app/index.html';
const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 600;

const windowSettings = {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
}

const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', function() {
    console.log('All windows are closed, closing down the application.')
    //if (process.platform != 'darwin') {
        app.quit();
    //}
});

app.on('ready', function() {
    mainWindow = new BrowserWindow(windowSettings);
    console.log("Loading from " + MAIN_ENTRY_FILE)
    mainWindow.loadURL(MAIN_ENTRY_FILE);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
