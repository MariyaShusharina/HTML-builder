
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const { stdout } = require("process");
const readline = require("readline");

//const readStream = fs.createReadStream("./02-write-file/file.txt");

const dirContents = new Promise ((resolve, reject) => {
  fsp.readdir("./03-files-in-folder/secret-folder", {withFileTypes: true});
  resolve();
  reject();
});

dirContents.then(
  function() {
    console.log(dirContents);
    const dirStats = new Promise ((resolve, reject) => {
      fsp.stat("./03-files-in-folder/secret-folder", {withFileTypes: true});
      resolve();
      reject();
    });

    dirContents.then(
      function() {
        console.log(dirStats);
      },
      function() {}
    );
  },
  function() {}
);





//const dirStats = fsp.stat(dirContents);

//console.log(dirStats);
