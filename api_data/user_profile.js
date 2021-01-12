const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));

//Get User Profile data
async function getUserProfiles(req,res){
  await config.query("select User_Id as User_Id, User_Name as User_Name, User_Mobile_Number as Mobile_Number, User_Email_Id as Email_Id, User_Gender as Gender, User_Age as Age, User_Image as Image, User_Bio as Bio, User_DisplayName as Display_name  from User_Profile", (err,rows,fields)=>{
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

//Get User Profile data by user id
app.post('/get_user_profile_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  config.query("select * from User_Profile where User_id = ?",[user_id], (err,rows,fields)=>{
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

//Get User Profile data by user name
app.post('/get_user_profile_by_user_name',(req,res)=>{
  var user_name = req.param('user_name');
  config.query("select * from User_Profile where User_Name = ?",[user_name], (err,rows,fields)=>{
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

//Get User Profile data by user mobile
async function getUserProfileByMobile(req,res){
  var user_mobile = req.param('user_mobile');
  await config.query("select * from User_Profile where User_Mobile_Number = ?",[user_mobile], (err,rows,fields)=>{
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

//Delete User Profile data by user id
app.delete('/remove_user_profile_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  config.query("delete from User_Profile where User_id = ?",[user_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete User Profile data by user name
app.delete('/remove_user_profile_by_user_name',(req,res)=>{
  var user_name = req.param('user_name');
  config.query("delete from User_Profile where User_Name = ?",[user_name], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete User Profile data by user mobile
app.delete('/remove_user_profile_by_user_mobile',(req,res)=>{
  var user_mobile = req.param('user_mobile');
  config.query("delete from User_Profile where User_Mobile_Number = ?",[user_mobile], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  module.exports = {
    getUserProfiles : getUserProfiles,
    getUserProfileByMobile : getUserProfileByMobile
  }