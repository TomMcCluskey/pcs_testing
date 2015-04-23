module.exports = function(package, tempDir, render) {
  var Mocha = require('mocha');
  var mocha = new Mocha( {reporter: 'doc'} );
  var fs = require('fs');
  var code = package.code;
  var dirName = 'public/' + tempDir;
  var tests = fs.readFileSync( 'public/tests/' + package.test + '.js');
  fs.mkdir(dirName, function() {
    fs.writeFile(dirName + '/test.js', code, function() {
      fs.appendFile(dirName + '/test.js', tests, function() {
        render();
        mocha.addFile(dirName + '/test.js');
        mocha.run(function(failures){
          process.on('exit', function () {
            process.exit(failures);
          });
        });
      });
    });
  });
};
