const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));

//Get all Cricket player details data
async function getPlayerDetails(req,res){
  await config.query("select Cricket_Player_Id as Player_Id, Cricket_Player_Name as Player_Name, Cricket_Player_Photo as Player_Photo, Cricket_Player_Category as Player_Category, Cricket_Player_Speciality as Player_Speciality, Cricket_Player_BirthDate as Player_Birthdate, Cricket_Player_Short_Name as Short_Name from Cricket_Player_Details", (err,rows,fields)=>{
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

//Get all Cricket player details data by nationality
async function getCricketPlayersByNationality(req,res){
  var nationality = req.param('nationality');
  await config.query("select Cricket_Player_Id as Player_Id, Cricket_Player_Name as Player_Name, Cricket_Player_Photo as Player_Photo, Cricket_Player_Category as Player_Category, Cricket_Player_Speciality as Player_Speciality, Cricket_Player_BirthDate as Player_Birthdate, Cricket_Player_Short_Name as Short_Name from Cricket_Player_Details where Cricket_Player_Nationality = ?",[nationality], (err,rows,fields)=>{
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

//Get Cricket player details data by player id
async function getCricketPlayerByPlayerId(req,res){
  var player_id = req.param('player_id');
  await config.query("select Cricket_Player_Id as Player_Id, Cricket_Player_Name as Player_Name, Cricket_Player_Photo as Player_Photo, Cricket_Player_Category as Player_Category, Cricket_Player_Speciality as Player_Speciality, Cricket_Player_BirthDate as Player_Birthdate, Cricket_Player_Short_Name as Short_Name from Cricket_Player_Details where Cricket_Player_Id = ?",[player_id], (err,rows,fields)=>{
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

//Get Cricket player details data by name
app.post('/get_cricket_player_details_by_name',(req,res)=>{
  var name = req.param('name');
  config.query("select Cricket_Player_Id as Player_Id, Cricket_Player_Name as Player_Name, Cricket_Player_Photo as Player_Photo, Cricket_Player_Category as Player_Category, Cricket_Player_Speciality as Player_Speciality, Cricket_Player_BirthDate as Player_Birthdate, Cricket_Player_Short_Name as Short_Name from Cricket_Player_Details where Cricket_Player_Name = ?",[name], (err,rows,fields)=>{
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

//Get Cricket player details data by category
app.post('/get_cricket_player_details_by_category',(req,res)=>{
  var category = req.param('category');
  config.query("select Cricket_Player_Id as Player_Id, Cricket_Player_Name as Player_Name, Cricket_Player_Photo as Player_Photo, Cricket_Player_Category as Player_Category, Cricket_Player_Speciality as Player_Speciality, Cricket_Player_BirthDate as Player_Birthdate, Cricket_Player_Short_Name as Short_Name from Cricket_Player_Details where Cricket_Player_Category = ?",[category], (err,rows,fields)=>{
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

//Get Cricket player details data by birth date
app.post('/get_cricket_player_details_by_bdate',(req,res)=>{
  var bdate = req.param('bdate');
  config.query("select Cricket_Player_Id as Player_Id, Cricket_Player_Name as Player_Name, Cricket_Player_Photo as Player_Photo, Cricket_Player_Category as Player_Category, Cricket_Player_Speciality as Player_Speciality, Cricket_Player_BirthDate as Player_Birthdate, Cricket_Player_Short_Name as Short_Name from Cricket_Player_Details where Cricket_Player_BirthDate = ?",[bdate], (err,rows,fields)=>{
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

//Delete Cricket player details data by cricket player id
app.delete('/remove_cricket_player_details_by_player_id',(req,res)=>{
  var player_id = req.param('player_id');
  config.query("delete from Cricket_Player_Details where Cricket_Player_id = ?",[player_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

module.exports = {
  getPlayerDetails : getPlayerDetails,
  getCricketPlayersByNationality : getCricketPlayersByNationality,
  getCricketPlayerByPlayerId : getCricketPlayerByPlayerId
}