var express = require('express');
var cors = require("cors");
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require("body-parser");

var monk = require("monk");
var db = monk("127.0.0.1:27017/Team12");

var express = require('express');
var app = express();

var corsOptions = {
    "origin": "http://localhost:3000",
    "credentials": true,
  };
  
  
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());    // To use cookies technology and json technology

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Make our db accessible to our router

app.use(function (req, res, next) {
    req.db = db;
    next();
  });


app.get('/test', function(req, res, next) {
    var db = req.db;
    var col = db.get('companyTable');
    col.find({}, function(err, docs){
        if (err){
          res.send(err);
        }
        else{
          var response =[];
          for(let i =0; i < docs.length; i++){
            var item ={
                "name": docs[i].name,
                "companyLogo": docs[i].logo,
            }
            response.push(item);
          }
          res.json(response);
        }
      });
});

// app.get('/', function(req, res, next) {
//     res.send("Hello World")
// });

// app.get('/', function(req, res, next) {
//     var db = req.db;
//     var col = db.get('companyInfo');
//     col.find({}, function(err, docs){
//         if (err){
//           res.send(err);
//         }
//         else{
//           var response =[];
//           for(let i =0; i < docs.length; i++){
//             var item ={
//                 "name": docs[i].name,
//                 "companyLogo": docs[i].logo,
//             }
//             response.push(item);
//           }
//           res.json(response);
//         }
//       });
// });

app.post("/login", (req, res) => {
    console.log(req.body);
    const { email, password} = req.body
    var db = req.db;
    var col = db.get('studentList');
    col.findOne({'email': email}, (err,user) => {
        if (user) {
            if (password === user.password) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
});

app.post("/loginCompany", (req, res) => {
    console.log(req.body);
    const { email, password} = req.body
    var db = req.db;
    var col = db.get('companyList');
    col.findOne({'email': email}, (err,user) => {
        if (user) {
            if (password === user.password) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
});

app.post("/register", (req, res) => {
    console.log(req.body)
    const { name, email, password} = req.body
    // rest is putting data in database and sending response back
    var db = req.db;
    var col = db.get('studentList');
    col.findOne({'email': email}, (err, user) => {
        if (user){
            res.send({message: "User already registerd"})
        } else {
            col.insert({'name': name, 'password': password, 'email': email}).then((data)=>{
                res.send( { message: "Successfully Registered, Please login now." })
            })
        }
    })
});

app.post("/registerCompany", (req, res) => {
    console.log(req.body)
    const { name, email, password} = req.body
    // rest is putting data in database and sending response back
    var db = req.db;
    var col = db.get('companyList');
    col.findOne({'email': email}, (err, user) => {
        if (user){
            res.send({message: "User already registerd"})
        } else {
            col.insert({'name': name, 'password': password, 'email': email}).then((data)=>{
                res.send( { message: "Successfully Registered, Please login now." })
            })
        }
    })
});


app.get('/company', function(req, res, next) {
    var db = req.db;
    var col = db.get('companyTable');
    col.findOne({'name': req.query.name}, function(err, docs){
        if (err){
          res.send(err);
        }
        else{
            var rating = Math.floor(docs.totalRating / docs.totalComments);
            var comments = docs.comments

            var response ={
                'rating': rating,
                'comments': comments
            }
            res.json(response);
          }

        });
  });


// app.get('/company', function(req, res, next) {
//     // res.send("Working")
//     var db = req.db;
//     var col = db.get('companyTable');
//     col.findOne({'name': 'DummyCompany'}, (err, data) => {
//         if (data){
//             // res.send({message: "User already registerd"})
//             console.log(data)
//         } else {
//             console.log("Error")
//             // col.insert({'name': name, 'password': password, 'email': email}).then((data)=>{
//             //     res.send( { message: "Successfully Registered, Please login now." })
//             // })
//         }
//     })
//     // col.find({}, function(err, docs){
//     //     if (err){
//     //       res.send(err);
//     //     }
//     //     else{
//     //       var response =[];
//     //       for(let i =0; i < docs.length; i++){
//     //         var rating = Math.floor(docs[i].totalRating / docs[i].totalComments);
//     //         var item ={
//     //             "name": docs[i].name,
//     //             "companyLogo": docs[i].logo,
//     //             "rating":  rating,
//     //             "review":  docs[i].comments,
//     //         }
//     //         response.push(item);
//     //       }
//     //       res.json(response);
//     //     }
//     //   });
//   });

app.post('/postComment/:name', express.urlencoded({extended: true}), async function(req, res, next) {
    var db = req.db;
    var col = db.get('companyInfo');
    var new_comment = {
      time: new Date(req.body.time),
      rating: req.body.rating,
      comment: req.body.comment
    };
    var totalNum = 1;
    var totalRating = req.body.rating;
    var comments=[]
    await col.findOne({name: req.body.name}).then((docs)=> {
        totalNum += docs.totalNum;
        totalRating += docs.totalRating;
        comments = docs.comments;
    });
    comments.push(new_comment)
    await col.update({_id: monk.id(req.body.newsID)}, {$set:{'totalNum': totalNum, 'totalrating': totalRating, 'comments': comments}}, function(err, docs){
        console.log((err === null)? "Successfully posted!" : err);
    });
  
    //Alternatively, could use renderComments to directly render the html
    //But to follow the requirement, I implement a new function which use similar logic as renderComments to generate the JSON
    var response = await renderCommentsToJSON(new_comments);
    res.json(response);
});

var server = app.listen(8081, function () {
var host = server.address().address;
var port = server.address().port;
console.log("Example app listening at http://%s:%s", host, port);
})
