module.exports = function(package) {
  // var production = require('./public/js/production.js');
  var Mocha = require('mocha');
  var mocha = new Mocha( {reporter: 'doc'} );
  var fs = require('fs');
  var tests = package.tests;
  var code = package.code;
  var dirName = 'public/tests';
  // TODO: sanitize input (standardize quote, escape chars, etc)
  fs.mkdir(dirName, function() {
    fs.writeFile(dirName + '/test.js', code, function() {
      fs.appendFile(dirName + '/test.js', tests, function() {
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
