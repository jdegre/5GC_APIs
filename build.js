const path = require('path');
const fs = require('fs');
var SwaggerParser = require('swagger-parser');
fs.readdir(".", function (err, files) {
    files.forEach(function (file) {
        if (file.indexOf(".yaml") > 0) SwaggerParser().validate(file);
    });
});
