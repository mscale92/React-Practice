var express = require('express');
var app = express();

app.use('/files', express.static(__dirname + '/src'));
//The files middleware makes life so much easier when accessing files,
//it is set up here to represent the file path, current directory + /src
//This is useful in our index.html file since we can access scripts as well as styles located
//within the file path!

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(process.env.PORT || 1337, function() {
  console.log('Server started ' + process.env.PORT);
});