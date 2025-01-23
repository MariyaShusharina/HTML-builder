
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const { stdout } = require("process");
const readline = require("readline");

let names = [];
let exts = [];
let sizes = [];

let j = 0;

//const readStream = fs.createReadStream("./02-write-file/file.txt");

fsp.readdir("./03-files-in-folder/secret-folder", {withFileTypes: true})
  .then((arr) => {
    //console.log(arr);
    arr.forEach(function (elem) {
      if (elem.isFile()) {
        let p = '';
        p = "./03-files-in-folder/secret-folder/" + elem.name;

        let nam = '';
        nam = elem.name;
        let i = 0;
        i = nam.indexOf(".");
        nam = nam.slice(0, i);

        let ext = '';
        ext = path.extname(p).slice(1);

        //console.log(`${nam} - ${ext} - `);

        names.push(nam);
        exts.push(ext);

        fsp.stat(p)
          .then((stats) => {
            //console.log(stats.size + " bytes");
            sizes.push(stats.size);
            console.log(`${names[j]} - ${exts[j]} - ${sizes[j]} bytes`);
            j++;
          });
      }
    })
  });

/*
let p = '';
p = "./03-files-in-folder/secret-folder/" + elem.name;
fsp.stat(p)
  .then((stats) => {
    console.log(stats.size + " bytes");
    sizes.push(stats.size);
  });
*/



/*
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
*/





//const dirStats = fsp.stat(dirContents);

//console.log(dirStats);
