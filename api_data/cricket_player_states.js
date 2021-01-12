const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));
 
//Get Cricket player states data
app.get('/get_all_cricket_player_states',(req,res)=>{
  con.query("select * from Cricket_Player_states", (err,rows,fields)=>{
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

//Get Cricket player states data by cricket match id
app.post('/get_cricket_player_states_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("select * from Cricket_Player_states where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
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

//Get Cricket player states data by player id
app.post('/get_cricket_player_states_by_player_id',(req,res)=>{
  var player_id = req.param('player_id');
  db.query("select * from Cricket_Player_states where Cricket_Player_id = ?",[player_id], (err,rows,fields)=>{
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

//Delete Cricket player states data by match id
app.delete('/remove_cricket_match_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("delete from Cricket_Player_states where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Cricket player states data by player id
app.delete('/remove_cricket_match_by_player_id',(req,res)=>{
  var player_id = req.param('player_id');
  db.query("delete from Cricket_Player_states where Cricket_Player_id = ?",[player_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});