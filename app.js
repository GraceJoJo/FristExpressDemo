var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('{"msg":"OK","data":[{"msg_id":4,"title":"ϵͳ֪ͨ","content":"����APPϵͳ�����������Ӧ���г��������������°汾������Ӱ���������ʹ�á�","user_id":0,"status":1,"create_time":"2018-01-31 18:03:22"},{"msg_id":3,"title":"��ӭ��������APP","content":"��ӭ��������APP��ף��ʹ����죡��","user_id":0,"status":1,"create_time":"2018-01-30 14:11:35"}],"unread":0}');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});













