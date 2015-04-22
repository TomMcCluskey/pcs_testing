module.exports = {
  runTests: function(package, render) {
    var shortid = require('shortid'); // Generates unique string IDs
    // var production = require('./public/js/production.js');
    var Mocha = require('mocha');
    var mocha = new Mocha( {reporter: 'doc'} );
    var fs = require('fs');
    var code = package.code;
    var tmpDir = 'tmp' + shortid.generate();
    var dirName = 'public/' + tmpDir;
    this.dirName = tmpDir;
    var tests = fs.readFileSync( 'public/tests/' + package.test + '.js');
    fs.mkdir(dirName, function() {
      fs.writeFile(dirName + '/test.js', code, function() {
        fs.appendFile(dirName + '/test.js', tests, function() {
          render();
          mocha.addFile(dirName + '/test.js');
          mocha.run(function(failures){
            // these appear to fire before the page loads, resulting in a 404
            // need a callback on the client to trigger deletion?
            // fs.unlinkSync(dirName + '/test.js');
            // fs.rmdirSync(dirName);
            process.on('exit', function () {
              process.exit(failures);
            });
          });
        });
      });
    });
  },
  dirName: ''
};
