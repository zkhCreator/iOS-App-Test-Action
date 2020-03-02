const core = require('@actions/core');
const github = require('@actions/github');
const shell = require('shelljs');

const envExcuteCommand = {
    "XcodeBuild": "xcodebuild -version",
    "CocoaPods Version": "pod --version",
    "xcpretty Version": "xcpretty --version",
    "SDKs": "xcodebuild -showsdks",
    "Devices": "instruments -s devices",
}

function printEnv() {
    envExcuteCommand.forEach(printData)
}

function printData(printTitle, excuteCommand) {
    let title = "\033[1;44m" + printTitle + ": \033[0m \n"
    shell.echo(title)
    shell.exec(excuteCommand)
}

try {
    printEnv()
  // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
//   core.setFailed(error.message);
}
