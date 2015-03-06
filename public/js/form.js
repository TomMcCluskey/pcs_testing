$(function form() {
  // console.log('Do some stuff!');
  // Does some stuff
  $('#submit').click( function() {
    // var mocha = new Mocha();
    function makeid() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    var dirName = 'tmp' + makeid();
    console.log(dirName);
    event.preventDefault();
    code = $('#code').val();
    tests = $('#tests').val();
    var package = { code: code, tests: tests, dir: dirName };
    console.log(package.dir);
    $.ajax({
      type: 'POST',
      url: '/' + dirName,
      data: package,
      dataType: 'json',
      success: testResults
    });

    function testResults( data, status, jqxhr) {
      console.log(data);
    }
  });
});
