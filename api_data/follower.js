const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Followers data
async function getFollowers(req,res){
  await config.query("select * from Follower", (err,rows,fields)=>{
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

//Get Followers data by follower id
async function getFollowerById(req,res){
  var follower_id = req.param('follower_id');
  await config.query("select * from Follower where Follower_id = ?",[follower_id], (err,rows,fields)=>{
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

//Get Follower data by user id
app.post('/get_follower_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("select * from Follower where User_id = ?",[user_id], (err,rows,fields)=>{
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

//Delete Follower data by follower id
app.delete('/remove_follower_by_id',(req,res)=>{
  var follower_id = req.param('follower_id');
  db.query("delete from Follower where Follower_id = ?",[follower_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Follower data by user id
app.delete('/remove_follower_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("delete from Follower where User_id = ?",[user_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

module.exports = {
  getFollowers : getFollowers,
  getFollowerById : getFollowerById
}