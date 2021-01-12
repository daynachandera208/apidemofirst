const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Cricket teams player details data
app.get('/get_all_cricket_teams_player_details',(req,res)=>{
    con.query("select * from Cricket_Teams_Player_Details", (err,rows,fields)=>{
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
  
  //Get Cricket teams player details data by league id
  app.post('/get_cricket_teams_player_details_by_league_id',(req,res)=>{
    var league_id = req.param('league_id');
    db.query("select * from Cricket_Teams_Player_Details where Cricket_League_id = ?",[league_id], (err,rows,fields)=>{
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
  
  //Get Cricket teams player details data by teams id
  app.post('/get_cricket_teams_player_details_by_teams_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("select * from Cricket_Teams_Player_Details where Cricket_Teams_id = ?",[teams_id], (err,rows,fields)=>{
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

  //Get Cricket teams player details data by players id
  app.post('/get_cricket_teams_player_details_by_players_id',(req,res)=>{
    var player_id = req.param('player_id');
    db.query("select * from Cricket_Teams_Player_Details where Cricket_Teams_Players_ids = ?",[player_id], (err,rows,fields)=>{
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
  
  //Delete Cricket teams player details data by cricket players id
  app.delete('/remove_cricket_teams_player_details_by_players_id',(req,res)=>{
    var player_id = req.param('player_id');
    db.query("delete from Cricket_Teams_Player_Details where Cricket_Players_ids = ?",[player_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Cricket teams player details data by league id
  app.delete('/remove_cricket_teams_player_details_by_league_id',(req,res)=>{
    var league_id = req.param('league_id');
    db.query("delete from Cricket_Teams_Player_Details where Cricket_League_id = ?",[league_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Cricket teams player details data by teams id
  app.delete('/remove_cricket_teams_player_details_by_teams_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("delete from Cricket_Teams_Player_Details where Cricket_Teams_id = ?",[teams_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });