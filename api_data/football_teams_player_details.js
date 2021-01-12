const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Football teams player details data
app.get('/get_all_football_teams_player_details',(req,res)=>{
    con.query("select * from Football_Teams_Player_Details", (err,rows,fields)=>{
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
                                                                                                                 
  //Get Football teams player details data by season id
  app.post('/get_football_teams_player_details_by_season_id',(req,res)=>{
    var season_id = req.param('season_id');
    db.query("select * from Football_Teams_Player_Details where Football_Season_id = ?",[season_id], (err,rows,fields)=>{
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
  
  //Get Football teams player details data by teams id
  app.post('/get_football_teams_player_details_by_teams_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("select * from Football_Teams_Player_Details where Football_Teams_id = ?",[teams_id], (err,rows,fields)=>{
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

  //Get Football teams player details data by players id
  app.post('/get_football_teams_player_details_by_players_id',(req,res)=>{
    var player_id = req.param('player_id');
    db.query("select * from Football_Teams_Player_Details where Football_Teams_Players_ids = ?",[player_id], (err,rows,fields)=>{
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
  
  //Delete Football teams player details data by football season id
  app.delete('/remove_football_teams_player_details_by_season_id',(req,res)=>{
    var season_id = req.param('season_id');
    db.query("delete from Football_Teams_Player_Details where Football_Season_id = ?",[season_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Football teams player details data by team id
  app.delete('/remove_football_teams_player_details_by_team_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("delete from Football_Teams_Player_Details where Football_Teams_id = ?",[teams_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Football teams player details data by player id
  app.delete('/remove_football_teams_player_details_by_player_id',(req,res)=>{
    var player_id = req.param('player_id');
    db.query("delete from Football_Teams_Player_Details where Football_Teams_Players_ids = ?",[player_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });