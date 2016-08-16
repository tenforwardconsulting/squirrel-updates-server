// Import New Relic if it's set up
if (process.env.NEW_RELIC_LICENSE_KEY) {
  require('newrelic');
}

var rollbar = require("rollbar");
rollbar.handleUncaughtExceptions("cc8642ac7306478292993c395a915ccb", { environment: "production" });

require('./lib/server');
