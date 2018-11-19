var fs = require("fs");
var path = require("path")
console.log("<<<<<<---------- Post Build ---------->>>>>>");
var cssChange = function(dir, fileList) {
  var files = fs.readdirSync(dir);
  fileList = fileList || [];
  files.forEach(function(file) {
    
    try {
      if (file.indexOf(".map") > -1) {
        var data = fs.unlinkSync(path.resolve(dir, file));
      }
      if (file.indexOf(".css") > -1) {
        var data = fs.readFileSync(path.resolve(dir, file), "UTF-8");
        var result = data.replace(/\/images\//g, 'images/');
        var result = result.replace(/\/fonts\//g, 'fonts/');
        fs.writeFileSync(path.resolve(dir, file), result, "UTF-8");
      }
      if (file.indexOf(".js") > -1) {
        var data = fs.readFileSync(path.resolve(dir, file), "UTF-8");
        var result = data.replace(/\/images\//g, 'images/');
        fs.writeFileSync(path.resolve(dir, file), result, "UTF-8");
      }
    } catch (er) {
      console.log(er);
    }
  });
}
cssChange(path.resolve(__dirname, "../www"));