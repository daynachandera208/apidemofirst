const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Following data
async function getFollowing(req,res){
  await config.query("select * from Following", (err,rows,fields)=>{
    if(!err)
    {
      var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0)
        {
          res.send('Invalid parameters');
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        }
    }
    else
    console.log(err);
  })
}

//Get Following data by following id
async function getFollowingById(req,res){
  var following_id = req.param('following_id');
  await config.query("select * from Following where Following_id = ?",[following_id], (err,rows,fields)=>{
    if(!err)
    {
      var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0)
        {
          res.send('Invalid parameters');
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        }
    }
    else
    console.log(err);
  })
}

//Get Following data by user id
app.post('/get_following_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("select * from Following where User_id = ?",[user_id], (err,rows,fields)=>{
    if(!err)
    {
      var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0)
        {
          res.send('Invalid parameters');
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        }
    }
    else
    console.log(err);
  })
});

//Delete Following data by following id
app.delete('/remove_following_by_id',(req,res)=>{
  var following_id = req.param('following_id');
  db.query("delete from Following where Following_id = ?",[following_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Following data by user id
app.delete('/remove_following_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("delete from Following where User_id = ?",[user_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

module.exports = {
  getFollowing : getFollowing,
  getFollowingById : getFollowingById
}