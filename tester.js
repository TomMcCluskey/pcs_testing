module.exports = function(package) {
  var production = require('./public/js/production.js');
  var Mocha = require('mocha');
  var mocha = new Mocha( {reporter: 'doc'} );
  // remove reference to production when done
  var fs = require('fs');
  // console.log('in tester.js');
  var tests = production.tests;
  var code = production.code;
  var dirName = package.dir;
  // change production to package when done
  // TODO: sanitize input (standardize quote, escape chars, etc
  // console.log(tests);
  // console.log(code);
  var output;
  fs.mkdir(dirName, function() {
    fs.writeFile(dirName + '/test.js', code, function() {
      fs.appendFile(dirName + '/test.js', tests, function() {
        mocha.addFile(dirName + '/test.js');
        output =  mocha.run(function(failures){
          process.on('exit', function () {
            process.exit(failures);
          });
        });
      });
    });
  });
};
