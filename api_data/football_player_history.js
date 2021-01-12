const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));
 
//Get Football Player History data
app.get('/get_all_football_player_history',(req,res)=>{
  con.query("select * from Football_Player_History(States)", (err,rows,fields)=>{
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

//Get Football Player History data by football match id
app.post('/get_football_player_history_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("select * from Football_Player_History(States) where Football_Match_id = ?",[match_id], (err,rows,fields)=>{
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

//Get Football Player History data by football player id
app.post('/get_football_player_history_by_player_id',(req,res)=>{
  var player_id = req.param('player_id');
  db.query("select * from Football_Player_History(States) where Football_Player_id = ?",[player_id], (err,rows,fields)=>{
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

//Get Football Player History data by football season id
app.post('/get_football_player_history_by_season_id',(req,res)=>{
  var season_id = req.param('season_id');
  db.query("select * from Football_Player_History(States) where Football_Season_id = ?",[season_id], (err,rows,fields)=>{
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

//Delete Football Player History data by football match id
app.delete('/remove_football_player_history_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("delete from Football_Player_History(States) where Football_Match_id = ?",[match_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Football Player History data by football player id
app.delete('/remove_football_player_history_by_player_id',(req,res)=>{
  var player_id = req.param('player_id');
  db.query("delete from Football_Player_History(States) where Football_Player_id = ?",[player_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Football Player History data by football season id
app.delete('/remove_football_player_history_by_season_id',(req,res)=>{
  var season_id = req.param('season_id');
  db.query("delete from Football_Player_History(States) where Football_Season_id = ?",[season_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});