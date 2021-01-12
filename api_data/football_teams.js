const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));
 

//Get Football teams data
app.get('/get_all_football_teams',(req,res)=>{
    con.query("select * from Football_Teams", (err,rows,fields)=>{
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
  
  //Get Football teams data by cricket league id
  app.post('/get_football_teams_by_league_id',(req,res)=>{
    var league_id = req.param('league_id');
    db.query("select * from Football_Teams where Football_League_id = ?",[league_id], (err,rows,fields)=>{
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
  
  //Get Football teams data by teams id
  app.post('/get_football_teams_by_teams_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("select * from Football_Teams where Football_Teams_id = ?",[teams_id], (err,rows,fields)=>{
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

  //Get Football teams data by teams name
  app.post('/get_football_teams_by_teams_name',(req,res)=>{
    var teams_name = req.param('teams_name');
    db.query("select * from Football_Teams where Football_Teams_Name = ?",[teams_name], (err,rows,fields)=>{
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
  
  //Delete Football teams data by league id
  app.delete('/remove_football_teams_by_league_id',(req,res)=>{
    var league_id = req.param('league_id');
    db.query("delete from Football_Teams where Football_League_id = ?",[league_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Football teams data by teams id
  app.delete('/remove_football_teams_by_teams_id',(req,res)=>{
    var teams_id = req.param('teams_id');
    db.query("delete from Football_Teams where Football_Teams_id = ?",[teams_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Football teams data by teams name
  app.delete('/remove_football_teams_by_teams_name',(req,res)=>{
    var teams_name = req.param('teams_name');
    db.query("delete from Football_Teams where Football_Teams_Name = ?",[teams_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });