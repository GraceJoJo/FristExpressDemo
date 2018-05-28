var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('{"msg":"OK","data":[{"msg_id":4,"title":"系统通知","content":"明白APP系统升级，请进入应用市场尽快升级成最新版本，以免影响你的正常使用。","user_id":0,"status":1,"create_time":"2018-01-31 18:03:22"},{"msg_id":3,"title":"欢迎来到明白APP","content":"欢迎来到明白APP，祝您使用愉快！！","user_id":0,"status":1,"create_time":"2018-01-30 14:11:35"}],"unread":0}');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});













