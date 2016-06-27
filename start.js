#!/usr/bin/env node

"use strict";

let execSync = require("child_process").execSync;
function runCommand(command) {
  // Pass in stdio: [0,1,2] so that the commands run with execSync
  // display their output in the same way as this script.
  // i.e. In the console as it's being run.
  execSync(command, { stdio: [0,1,2] });
}

runCommand("npm start");
