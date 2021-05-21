const { app, BorwserWindow } = require('electron');
const path = require('path');
const isDev = require('is-dev');

let mainWindow = require;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  });
}
