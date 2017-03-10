var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var page1={
    title:'Page 1| Darshan Trivedi',
    heading:'About Me',
    content:`<div class="page1body">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <h1>
        First Heading of the Page
    </h1>
    <p>
        First page's content
    </p>
    <hr/>
    <p1>
        The site is visited for: 
    </p1>
</div>`
    
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
function createtemplate(data){
    var heading=data.heading;
    var title=data.title;
    var HTMLTemplate=`<html>
<head>
     <link href="/ui/style.css" rel="stylesheet" />
    <title>
        ${title}
    </title>
   
</head>
<div class="page1body">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <h1>
        ${heading}
    </h1>
    <p>
        First page's content
    </p>
    <hr/>
</div>
</html>`;
return HTMLTemplate;
}
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));

});
app.get('/page1',function(req,res){
    res.send(createtemplate(page1));
});
app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
