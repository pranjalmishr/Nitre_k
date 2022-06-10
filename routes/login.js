var express = require('express');
var router = express.Router();
// var modelLogin = require("../model/login")
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.43.1",
  user: "root",
  password: "1234",
  database: "app_db"
});



router.get('/', function(req, res, next) {
    console.log("Ayush");
    con.connect(function(err) {
        console.log("Abhinav")
        if (err) console.log("err");
        console.log("Connected!");
      });
    // modelLogin.a(modelLogin.pandy.name)
console.log("Pranjal")
    res.render('login')
});

router.get('/getLogin', function(req, res, next) {
    console.log(req.query)
    // res.send({"name":"himani"})
    //res.render('teacher')
res.json({"Name":requ})
});
router.post('/getLogin', function(req, res, next) {
    console.log(req.body)
    // res.send({"name":"himani"})
    //res.render('teacher')
    var sql = "INSERT INTO `login` (`fname`, `lname`) \
    VALUES ('"+req.body.fname+"', '"+req.body.lname+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
res.json({"Name":req.body})
});

router.all('/getPost', function(req, res, next) {
    console.log(req.body)
    if(req.body){
        //do something
    }else{
        //do something else
    }
    // res.send({"name":"himani"})
    //res.render('teacher')
    console.log(req.body.pass)
res.json({"Name":req.body})
});

module.exports = router;