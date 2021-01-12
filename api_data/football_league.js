const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Football League data
app.get('/get_all_football_league',(req,res)=>{
  db.query("select * from Football_League", (err,rows,fields)=>{
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

//Get Football League data by league id
app.post('/get_football_league_by_id',(req,res)=>{
  var league_id = req.param('league_id');
  db.query("select * from Football_League where Football_League_id = ?",[league_id], (err,rows,fields)=>{
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

//Get Football League data by league season id
app.post('/get_football_league_by_season_id',(req,res)=>{
  var season_id = req.param('season_id');
  db.query("select * from Football_League where Football_Season_id = ?",[season_id], (err,rows,fields)=>{
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

//Get Football League data by league name
app.post('/get_football_league_by_league_name',(req,res)=>{
  var league_name = req.param('league_name');
    db.query("select * from Football_League where Football_League_Name = ?",[league_name], (err,rows,fields)=>{
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

//Delete Football League data by league id
app.delete('/remove_football_league_by_id',(req,res)=>{
  var league_id = req.param('league_id');
  db.query("delete from Football_League where Football_League_id = ?",[league_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Football League data by season id
app.delete('/remove_football_league_by_season_id',(req,res)=>{
  var season_id = req.param('season_id');
  db.query("delete from Football_League where Football_Season_id = ?",[season_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Football League data by league name
app.delete('/remove_football_league_by_league_name',(req,res)=>{
  var league_name = req.param('league_name');
    db.query("delete from Football_League where Football_League_Name = ?",[league_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });