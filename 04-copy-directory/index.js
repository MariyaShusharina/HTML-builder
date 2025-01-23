
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const filesPath = path.join(__dirname, "files");
const filesCopyPath = path.join(__dirname, "files-copy");

let isCopied = false;

fsp.readdir(__dirname, {withFileTypes: true})
  .then((arr) => {
    arr.forEach(function (elem) {
      console.log(elem);
      if(elem.isDirectory && elem.name == "files-copy") {
        fs.rm(filesCopyPath, {recursive: true, force: true}, () => {
          copyDir();
          isCopied = true;
        });
      }
    })
    if(!isCopied) {
      copyDir();
    }
  });

function copyDir() {

  fsp.mkdir(filesCopyPath, {recursive: true});

  fsp.readdir(filesPath)
    .then((arr) => {
      arr.forEach(function (elem) {
        let p = '';
        p = `${filesPath}/${elem}`;

        let dest = '';
        dest = `${filesCopyPath}/${elem}`;

        fsp.copyFile(p, dest);
      })
    });
}
