
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const stylesPath = path.join(__dirname, "styles");
const distPath = path.join(__dirname, "project-dist", "bundle.css");

const writeStream = fs.createWriteStream(distPath);

let paths = [];
let exts = [];

let i = 0;

fsp.readdir(stylesPath, {withFileTypes: true})
  .then((arr) => {
    arr.forEach(function (elem) {
      let p = '';
      p = path.join(stylesPath, elem.name);
      paths.push(p);
      exts.push(path.extname(p));
    });

    fs.writeFile(distPath, "", (err) => {});
    
    writing();
  });

function writing() {
  while (i < paths.length) {
    if (exts[i] == ".css") {
      let dat = '';
      fs.readFile(paths[i], "utf-8", (err, data) => {
        dat = data;
        fs.appendFile(distPath, dat, (err) => {});
        i++;
        writing();
      })
    }
    i++;
  }
}
