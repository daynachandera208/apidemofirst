const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));
 

//Get Football season data
app.get('/get_all_football_season',(req,res)=>{
    con.query("select * from Football_Season", (err,rows,fields)=>{
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
  
  //Get Football season data by football season id
  app.post('/get_football_season_by_season_id',(req,res)=>{
    var season_id = req.param('season_id');
    db.query("select * from Football_Season where Football_Season_id = ?",[season_id], (err,rows,fields)=>{
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
  
  //Get Football season data by season name
  app.post('/get_football_season_by_name',(req,res)=>{
    var season_name = req.param('season_name');
    db.query("select * from Football_Season where Football_Season_Name = ?",[season_name], (err,rows,fields)=>{
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
  
  //Delete Football season data by football seson id
  app.delete('/remove_football_season_by_season_id',(req,res)=>{
    var season_id = req.param('season_id');
    db.query("delete from Football_Season where Football_Season_id = ?",[season_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Football season data by season name
  app.delete('/remove_football_match_by_name',(req,res)=>{
    var season_name = req.param('season_name');
    db.query("delete from Football_Season where Football_Season_Name = ?",[season_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });