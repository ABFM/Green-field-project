const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
//const db = require('./db/index.js')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const util = require('./helpers/utility');
// const bcrypt = require('bcrypt');
const app = express()

// using of modules-------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')))

// the routes handlers----------------


app.get('/', util.checkUser, function(req, res) {
   res.render('index');

});


app.post('/login',function(req, res){

 res.sendStatus(201)
  
});
app.post('/like',function(req, res){

 res.sendStatus(201)
  
});
app.post('/unlike',function(req, res){

 res.sendStatus(201)
  
});
app.post('/import',function(req, res){

 res.sendStatus(201)
  
});
app.get('/logout', function(req, res) {
    res.sendStatus(200);

});


app.post('/signup', function(req, res){
res.sendStatus(201)
})

app.post('/fetch', function (req, res){
 
      res.send(data);
   
});

app.post('/add', function(req, res){
 

});

app.post('/delete', function(req,res) {

})

app.post('/searchUser', function(req, res) {
  res.send([{urlName:'bushra',category:'videos',url:'www.youtube.com'},
    {urlName:'bushra2',category:'photos',url:'www.youtube.com2'},
    {urlName:'bushra3',category:'Articles',url:'www.youtube.com3'}
    ,{urlName:'bushra',category:'others',url:'www.youtube.com4'}])
})

app.post('/import', function(req, res) {
  
})

const port = process.env.port || 3000;
app.listen(port, () => console.log('Example app listening on port 3000!'))
