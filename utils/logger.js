const fs = require('fs');
const path = require('path');

const LOG_PATH = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(LOG_PATH)) fs.mkdirSync(LOG_PATH);

function logRequest(req) {
  const line = `${new Date().toISOString()} | ${req.method} ${req.url}\n`;
  fs.appendFile(path.join(LOG_PATH, 'access.log'), line, () => {});
}

function logError(err) {
  const line = `${new Date().toISOString()} | ${err.stack || err}\n`;
  fs.appendFile(path.join(LOG_PATH, 'error.log'), line, () => {});
}

module.exports = { logRequest, logError };
