const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get football leagues teams data
app.get('/get_all_football_leagues_teams',(req,res)=>{
    db.query("select * from Football_Leagues_Teams", (err,rows,fields)=>{
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
  
  //Get football leagues teams data by football league id
  app.post('/get_football_leagues_team_by_league_id',(req,res)=>{
    var league_id = req.param('league_id');
    db.query("select * from Football_Leagues_Teams where Cricket_League_id = ?",[league_id], (err,rows,fields)=>{
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

  //Get football leagues teams data by teams id
  app.post('/get_football_leagues_team_by_team_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("select * from Football_Leagues_Teams where Cricket_Teams_id = ?",[teams_id], (err,rows,fields)=>{
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

  //Delete football leagues teams data by league id
    app.delete('/remove_football_leagues_team_by_league_id',(req,res)=>{
      var league_id = req.param('league_id');
    db.query("delete from Football_Leagues_Teams where Cricket_League_id = ?",[league_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete football leagues teams data by teams id
  app.delete('/remove_football_leagues_team_by_team_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("delete from Football_Leagues_Teams where Cricket_Teams_id = ?",[teams_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
