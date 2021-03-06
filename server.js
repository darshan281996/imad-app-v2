var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var comment;
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/page1',function(req,res){
   // var articlename=req.params.articlename;
     res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});

app.get('/page2',function(req,res){
   // var articlename=req.params.articlename;
     res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});
var comments=[];

app.get('/comment',function(req,res){
    res.send(JSON.stringify(comments));
});
app.get('/comment/:articlename',function(req,res){
    var articlename=req.params.articlename;
    comments.push(articlename);
    res.send(" omment saved");
});
app.get('/ui/page1.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.js'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
