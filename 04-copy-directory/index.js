
const fsp = require("fs/promises");
const path = require("path");

const filesPath = path.join(__dirname, "files");
const filesCopyPath = path.join(__dirname, "files-copy");

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

copyDir();
