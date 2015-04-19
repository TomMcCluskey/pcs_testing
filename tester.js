module.exports = function(package) {
  var shortid = require('shortid'); // Generates unique string IDs
  // var production = require('./public/js/production.js');
  var Mocha = require('mocha');
  var mocha = new Mocha( {reporter: 'doc'} );
  var fs = require('fs');
  var code = package.code;
  var dirName = 'public/tmp' + shortid.generate();
  var tests = fs.readFileSync( 'public/tests/' + package.test + '.js');
  fs.mkdir(dirName, function() {
    fs.writeFile(dirName + '/test.js', code, function() {
      fs.appendFile(dirName + '/test.js', tests, function() {
        mocha.addFile(dirName + '/test.js');
        mocha.run(function(failures){
          console.log('running');
          fs.unlinkSync(dirName + '/test.js');
          fs.rmdirSync(dirName);
          process.on('exit', function () {
            process.exit(failures);
          });
        });
      });
    });
  });
};
