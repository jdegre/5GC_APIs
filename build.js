const path = require('path');
const fs = require('fs');
fs.readdir(".", function (err, files) {
    files.forEach(function (file) {
      console.log(file);
    });
});
