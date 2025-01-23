
const fs = require("fs");
const path = require("path");
const process = require("process");
const readline = require("readline");

const events = require("events");
const eventEmitter = new events.EventEmitter();

const stdout = process.stdout;
const stdin = process.stdin;

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

const closing = function () {
  console.log("Thank you for your writing. Goodbye!");
  rl.close();
}
process.on("exit", closing);

const writeStream = fs.createWriteStream("./02-write-file/file.txt");

function furtherInput() {
  rl.question("", function (chunk) {
    if (chunk == "exit\n" || chunk == "exit") {
      rl.close();
      process.exit();
    } else {
      writeStream.write(chunk);
      furtherInput();
    }
  });
}

function ask() {
  rl.question("Write something, please...\n", function (chunk) {
    if (chunk == "exit\n" || chunk == "exit") {
      rl.close();
      process.exit();
    } else {
      writeStream.write(chunk);
      furtherInput();
    }
  });
}

ask();
