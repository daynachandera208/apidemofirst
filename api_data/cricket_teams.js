const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Cricket teams data
async function getCricketTeams(req,res){
   await config.query("select Cricket_Teams_Id as Team_Id, Cricket_Teams_Name as Team_Name, Cricket_Teams_Initials as Team_Initial, Cricket_Teams_Logo as Team_Logo, Cricket_League_Id as League_Id from Cricket_Teams", (err,rows,fields)=>{
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
  
  //Get Cricket teams data by cricket league id
  async function getCricketTeamByLeagueId(req,res){
    var league_id = req.param('teams_id');
    await config.query("select Cricket_Teams_Id as Team_Id, Cricket_Teams_Name as Team_Name, Cricket_Teams_Initials as Team_Initial, Cricket_Teams_Logo as Team_Logo, Cricket_League_Id as League_Id from Cricket_Teams where Cricket_League_id = ?",[league_id], (err,rows,fields)=>{
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
  
  //Get Cricket teams data by teams id
  app.post('/get_cricket_teams_by_teams_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("select * from Cricket_Teams where Cricket_Teams_id = ?",[teams_id], (err,rows,fields)=>{
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

  //Get Cricket teams data by teams name
  app.post('/get_cricket_teams_by_teams_name',(req,res)=>{
    var teams_name = req.param('teams_name');
    db.query("select * from Cricket_Teams where Cricket_Teams_Name = ?",[teams_name], (err,rows,fields)=>{
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
  
  //Delete Cricket teams data by league id
  app.delete('/remove_cricket_teams_by_league_id',(req,res)=>{
    var league_id = req.param('league_id');
    db.query("delete from Cricket_Teams where Cricket_League_id = ?",[league_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Cricket teams data by teams id
  app.delete('/remove_cricket_teams_by_teams_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("delete from Cricket_Teams where Cricket_Teams_id = ?",[teams_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Cricket teams data by teams name
  app.delete('/remove_cricket_teams_by_teams_name',(req,res)=>{
    var teams_name = req.param('teams_name');
    db.query("delete from Cricket_Teams where Cricket_Teams_Name = ?",[teams_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  module.exports = {
    getCricketTeams : getCricketTeams,
    getCricketTeamByLeagueId : getCricketTeamByLeagueId
  }